import {
  Box,
  breakLines,
  forcedBreak,
  Glue,
  InputItem,
  MaxAdjustmentExceededError,
  Penalty,
} from './layout';
import DOMTextMeasurer from './util/dom-text-measurer';
import { textNodesInRange } from './util/range';

const NODE_TAG = 'insertedByTexLinebreak';

type NodeOffset = {
  end: number;
  node: Node;
  start: number;
};

type DOMBox = Box & NodeOffset;
type DOMGlue = Glue & NodeOffset;
type DOMPenalty = Penalty & NodeOffset;
type DOMItem = DOMBox | DOMGlue | DOMPenalty;

const isSpace = (word: string): boolean => {
  return /\s/.test(word.charAt(0));
};

/**
 * Add layout items for `node` to `items`.
 */
const addItemsForTextNode = (
  items: DOMItem[],
  node: Text,
  measureFunction: (context: Element, word: string) => number,
  hyphenateFunction?: (word: string) => string[]
): void => {
  const text = node.nodeValue ?? '';
  const element = node.parentNode as Element;

  const spaceWidth = measureFunction(element, ' ');
  const shrink = Math.max(0, spaceWidth - 3);
  const hyphenWidth = measureFunction(element, '-');

  const chunks = text.split(/(\s+)/).filter(w => {
    return w.length > 0;
  });
  let textOffset = 0;

  for (const w of chunks) {
    if (isSpace(w)) {
      const glue: DOMGlue = {
        end: textOffset + w.length,
        node,
        shrink,
        start: textOffset,
        stretch: spaceWidth,
        type: 'glue',
        width: spaceWidth,
      };
      items.push(glue);
      textOffset += w.length;
      continue;
    }

    if (hyphenateFunction) {
      const chunks = hyphenateFunction(w);
      for (const [index, c] of chunks.entries()) {
        const box: DOMBox = {
          end: textOffset + c.length,
          node,
          start: textOffset,
          type: 'box',
          width: measureFunction(element, c),
        };
        textOffset += c.length;
        items.push(box);
        if (index < chunks.length - 1) {
          const hyphen: DOMPenalty = {
            cost: 10,
            end: textOffset,
            flagged: true,
            node,
            start: textOffset,
            type: 'penalty',
            width: hyphenWidth,
          };
          items.push(hyphen);
        }
      }
    } else {
      const box: DOMBox = {
        end: textOffset + w.length,
        node,
        start: textOffset,
        type: 'box',
        width: measureFunction(element, w),
      };
      textOffset += w.length;
      items.push(box);
    }
  }
};

/**
 * Add layout items for `element` and its descendants to `items`.
 */
const addItemsForElement = (
  items: DOMItem[],
  element: Element,
  measureFunction: (context: Element, word: string) => number,
  hyphenateFunction?: (word: string) => string[]
): void => {
  const {
    display,
    width,
    paddingLeft,
    paddingRight,
    marginLeft,
    marginRight,
    borderLeftWidth,
    borderRightWidth,
  } = getComputedStyle(element);

  if (display === 'inline') {
    // Add box for margin/border/padding at start of box.
    const leftMargin =
      Number.parseFloat(marginLeft) +
      Number.parseFloat(borderLeftWidth) +
      Number.parseFloat(paddingLeft);
    if (leftMargin > 0) {
      items.push({
        end: 0,
        node: element,
        start: 0,
        type: 'box',
        width: leftMargin,
      });
    }

    // Add items for child nodes.
    addItemsForNode(items, element, measureFunction, hyphenateFunction, false);

    // Add box for margin/border/padding at end of box.
    const rightMargin =
      Number.parseFloat(marginRight) +
      Number.parseFloat(borderRightWidth) +
      Number.parseFloat(paddingRight);
    if (rightMargin > 0) {
      const { length } = element.childNodes;
      items.push({
        end: length,
        node: element,
        start: length,
        type: 'box',
        width: rightMargin,
      });
    }
  } else {
    // Treat this item as an opaque box.
    items.push({
      end: 1,
      node: element,
      start: 0,
      type: 'box',
      width: Number.parseFloat(width),
    });
  }
};

/**
 * Add layout items for input to `breakLines` for `node` to `items`.
 *
 * This function, `addItemsForTextNode` and `addItemsForElement` take an
 * existing array as a first argument to avoid allocating a large number of
 * small arrays.
 */
const addItemsForNode = (
  items: DOMItem[],
  node: Node,
  measureFunction: (context: Element, word: string) => number,
  hyphenateFunction?: (word: string) => string[],
  addParagraphEnd = true
  // eslint-disable-next-line max-params
): void => {
  const children = [...node.childNodes];

  for (const child of children) {
    if (child instanceof Text) {
      addItemsForTextNode(items, child, measureFunction, hyphenateFunction);
    } else if (child instanceof Element) {
      addItemsForElement(items, child, measureFunction, hyphenateFunction);
    }
  }

  if (addParagraphEnd) {
    const end = node.childNodes.length;

    // Add a synthetic glue that aborbs any left-over space at the end of the
    // last line.
    items.push(
      {
        end,
        node,
        shrink: 0,
        start: end,
        stretch: 1000,
        type: 'glue',
        width: 0,
      },
      { ...forcedBreak(), end, node, start: end }
    );
  }
};

const elementLineWidth = (element: HTMLElement): number => {
  const { width, boxSizing, paddingLeft, paddingRight } =
    getComputedStyle(element);
  let lineWidth = Number.parseFloat(width);
  if (boxSizing === 'border-box') {
    lineWidth -= Number.parseFloat(paddingLeft);
    lineWidth -= Number.parseFloat(paddingRight);
  }

  return lineWidth;
};

/**
 * Calculate the actual width of each line and the number of spaces that can be
 * stretched or shrunk to adjust the width.
 */
const lineWidthsAndGlueCounts = (
  items: InputItem[],
  breakpoints: number[]
): [number[], number[]] => {
  const widths: number[] = [];
  const glueCounts: number[] = [];

  for (let b = 0; b < breakpoints.length - 1; b++) {
    let actualWidth = 0;
    let glueCount = 0;

    const start = b === 0 ? breakpoints[b] : breakpoints[b] + 1;
    for (let p = start; p <= breakpoints[b + 1]; p++) {
      const item = items[p];
      if (item.type === 'box') {
        actualWidth += item.width;
      } else if (
        item.type === 'glue' &&
        p !== start &&
        p !== breakpoints[b + 1]
      ) {
        actualWidth += item.width;
        ++glueCount;
      } else if (item.type === 'penalty' && p === breakpoints[b + 1]) {
        actualWidth += item.width;
      }
    }

    widths.push(actualWidth);
    glueCounts.push(glueCount);
  }

  return [widths, glueCounts];
};

/**
 * Mark a node as having been created by `justifyContent`.
 */
const tagNode = (node: Node): void => {
  (node as any)[NODE_TAG] = true;
};

/**
 * Return `true` if `node` was created by `justifyContent`.
 */
const isTaggedNode = (node: Node): boolean => {
  return Object.hasOwnProperty.call(node, NODE_TAG);
};

/**
 * Return all descendants of `node` created by `justifyContent`.
 */
function taggedChildren(node: Node): Node[] {
  const children = [];
  for (const childNode of node.childNodes) {
    if (isTaggedNode(childNode)) {
      children.push(childNode);
    }

    if (childNode.childNodes.length > 0) {
      children.push(...taggedChildren(childNode));
    }
  }

  return children;
}

const isTextOrInlineElement = (node: Node): boolean => {
  if (node instanceof Text) {
    return true;
  }

  if (node instanceof Element) {
    const style = getComputedStyle(node);
    return style.display === 'inline';
  }

  return false;
};

/**
 * Wrap text nodes in a range and adjust the inter-word spacing.
 *
 * @param r - The range to wrap
 * @param wordSpacing - The additional spacing to add between words in pixels
 */
const addWordSpacing = (r: Range, wordSpacing: number): Text[] => {
  // Collect all text nodes in range, skipping any non-inline elements and
  // their children because those are treated as opaque blocks by the line-
  // breaking step.
  const texts = textNodesInRange(r, isTextOrInlineElement);

  for (const t of texts) {
    const wrapper = document.createElement('span');
    tagNode(wrapper);
    wrapper.style.wordSpacing = `${wordSpacing}px`;
    t.parentNode?.replaceChild(wrapper, t);
    wrapper.append(t);
  }

  return texts;
};

/**
 * Reverse the changes made to an element by `justifyContent`.
 */
export const unjustifyContent = (element: HTMLElement): void => {
  // Find and remove all elements inserted by `justifyContent`.
  const tagged = taggedChildren(element);
  for (const node of tagged) {
    const children = [...node.childNodes];
    for (const child of children) {
      // @ts-expect-error Does exist
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      node.before(child);
    }

    // @ts-expect-error Does exist
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    node.remove();
  }

  // Re-join text nodes that were split by `justifyContent`.
  element.normalize();
};

type ElementBreakpoints = {
  breakpoints: number[];
  el: HTMLElement;
  items: DOMItem[];
  lineWidth: number;
};

/**
 * Justify an existing paragraph.
 *
 * Justify the contents of `elements`, using `hyphenateFn` to apply hyphenation if
 * necessary.
 *
 * To justify multiple paragraphs, it is more efficient to call `justifyContent`
 * once with all the elements to be processed, than to call `justifyContent`
 * separately for each element. Passing a list allows `justifyContent` to
 * optimize DOM manipulations.
 */
export const justifyContent = (
  elements: HTMLElement | HTMLElement[],
  hyphenateFunction?: (word: string) => string[]
  // eslint-disable-next-line sonarjs/cognitive-complexity
): void => {
  // To avoid layout thrashing, we batch DOM layout reads and writes in this
  // function. ie. we first measure the available width and compute linebreaks
  // for all elements and then afterwards modify all the elements.

  if (!Array.isArray(elements)) {
    elements = [elements];
  }

  // Undo the changes made by any previous justification of this content.
  for (const element of elements) {
    unjustifyContent(element);
  }

  // Calculate line-break positions given current element width and content.
  const measurer = new DOMTextMeasurer();
  const measure = measurer.measure.bind(measurer);

  const elementBreaks: ElementBreakpoints[] = [];
  for (const element of elements) {
    const lineWidth = elementLineWidth(element);
    let items: DOMItem[] = [];
    addItemsForNode(items, element, measure);
    let breakpoints;
    try {
      // First try without hyphenation but a maximum stretch-factor for each
      // space.
      breakpoints = breakLines(items, lineWidth, {
        maxAdjustmentRatio: 2,
      });
    } catch (error: unknown) {
      if (error instanceof MaxAdjustmentExceededError) {
        // Retry with hyphenation and unlimited stretching of each space.
        items = [];
        addItemsForNode(items, element, measure, hyphenateFunction);
        breakpoints = breakLines(items, lineWidth);
      } else {
        throw error;
      }
    }

    elementBreaks.push({ breakpoints, el: element, items, lineWidth });
  }

  // Insert line-breaks and adjust inter-word spacing.
  for (const { el, items, breakpoints, lineWidth } of elementBreaks) {
    const [actualWidths, glueCounts] = lineWidthsAndGlueCounts(
      items,
      breakpoints
    );

    // Create a `Range` for each line. We create the ranges before modifying the
    // contents so that node offsets in `items` are still valid at the point when
    // we create the Range.
    const endsWithHyphen: boolean[] = [];
    const lineRanges: Range[] = [];
    for (let b = 1; b < breakpoints.length; b++) {
      const previousBreakItem = items[breakpoints[b - 1]];
      const breakItem = items[breakpoints[b]];

      const r = document.createRange();
      if (b > 1) {
        r.setStart(previousBreakItem.node, previousBreakItem.end);
      } else {
        r.setStart(el, 0);
      }

      r.setEnd(breakItem.node, breakItem.start);
      lineRanges.push(r);
      endsWithHyphen.push(breakItem.type === 'penalty' && breakItem.flagged);
    }

    // Disable automatic line wrap.
    el.style.whiteSpace = 'nowrap';

    // Insert linebreaks.
    for (const [index, r] of lineRanges.entries()) {
      if (index === 0) {
        continue;
      }

      const brElement = document.createElement('br');
      tagNode(brElement);

      // Insert linebreak. The browser will automatically adjust subsequent
      // ranges.
      r.insertNode(brElement);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      r.setStart(brElement.nextSibling!, 0);
    }

    // Adjust inter-word spacing on each line and add hyphenation if needed.
    for (const [index, r] of lineRanges.entries()) {
      const spaceDiff = lineWidth - actualWidths[index];
      const extraSpacePerGlue = spaceDiff / glueCounts[index];

      // If this is the final line and the natural spacing between words does
      // not need to be compressed, then don't try to expand the spacing to fill
      // the line.
      const isFinalLine = index === lineRanges.length - 1;
      if (isFinalLine && extraSpacePerGlue >= 0) {
        continue;
      }

      const wrappedNodes = addWordSpacing(r, extraSpacePerGlue);
      if (endsWithHyphen[index] && wrappedNodes.length > 0) {
        const lastNode = wrappedNodes[wrappedNodes.length - 1];
        const hyphen = document.createTextNode('-');
        tagNode(hyphen);
        lastNode.parentNode?.append(hyphen);
      }
    }
  }
};
