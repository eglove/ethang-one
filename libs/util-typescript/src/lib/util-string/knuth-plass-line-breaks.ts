// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck These imports are causing issues between CI and local linter
import enUsPatterns from 'hyphenation.en-us';
import { createHyphenator, justifyContent } from 'tex-linebreak';

export const knuthPlassLineBreaks = (
  querySelectors: keyof HTMLElementTagNameMap
): void => {
  const paragraphs = [...document.querySelectorAll(querySelectors)];
  if (paragraphs?.length > 0) {
    for (const paragraph of paragraphs) {
      paragraph.style.whiteSpace = 'revert';
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const hyphenate = createHyphenator(enUsPatterns);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      justifyContent(paragraphs, hyphenate);
    } catch {
      //
    }
  }
};
