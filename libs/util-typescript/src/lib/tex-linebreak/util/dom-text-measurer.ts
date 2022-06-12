class TextMetricsCache {
  private readonly _fonts: Map<Element, string>;
  private readonly _textWidths: Map<string, Map<string, number>>;

  constructor() {
    this._fonts = new Map();
    this._textWidths = new Map();
  }

  putFont(element: Element, cssFont: string): void {
    this._fonts.set(element, cssFont);
  }

  cssFontForElement(element: Element): string | undefined {
    return this._fonts.get(element);
  }

  putWidth(cssFont: string, word: string, width: number): void {
    let widths = this._textWidths.get(cssFont);
    if (!widths) {
      widths = new Map();
      this._textWidths.set(cssFont, widths);
    }

    widths.set(word, width);
  }

  getWidth(cssFont: string, word: string): number | undefined {
    const widths = this._textWidths.get(cssFont);
    if (!widths) {
      return undefined;
    }

    return widths.get(word);
  }
}

/**
 * Return the computed CSS `font` property value for an element.
 */
const cssFontForElement = (element: Element): string => {
  const style = getComputedStyle(element);

  // Safari and Chrome can synthesize a value for `font` for us.
  let { font } = style;
  if (font.length > 0) {
    return font;
  }

  // Fall back to generating CSS font property value if browser (eg. Firefox)
  // does not synthesize it automatically.
  const { fontStyle, fontVariant, fontWeight, fontSize, fontFamily } = style;
  font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize} ${fontFamily}`;
  return font;
};

let measureContext: CanvasRenderingContext2D;

/**
 * Measure the width of `text` as it would appear if rendered within an
 * `Element` with a given computed `font` style.
 */
const measureText = (cssFont: string, text: string): number => {
  if (typeof measureContext === 'undefined') {
    const canvas = document.createElement('canvas');
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    measureContext = canvas.getContext('2d')!;
  }

  // Capture as much of the style as possible. Note that some properties such
  // as `font-stretch`, `font-size-adjust` and `font-kerning` are not settable
  // through the CSS `font` property.
  //
  // Apparently in some browsers the canvas context's text style inherits
  // style properties from the `<canvas>` element.
  // See https://stackoverflow.com/a/8955835/434243
  measureContext.font = cssFont;
  return measureContext.measureText(text).width;
};

/** Measure the width of pieces of text in the DOM, with caching. */
export default class DOMTextMeasurer {
  private readonly _cache: TextMetricsCache;

  constructor() {
    this._cache = new TextMetricsCache();
  }

  /**
   * Return the width of `text` rendered by a `Text` node child of `context`.
   */
  measure(context: Element, text: string): number {
    let cssFont = this._cache.cssFontForElement(context);
    if (typeof cssFont !== 'string') {
      cssFont = cssFontForElement(context);
      this._cache.putFont(context, cssFont);
    }

    let width = this._cache.getWidth(cssFont, text);
    if (typeof width !== 'number') {
      width = measureText(cssFont, text);
      this._cache.putWidth(cssFont, text, width);
    }

    return width;
  }
}
