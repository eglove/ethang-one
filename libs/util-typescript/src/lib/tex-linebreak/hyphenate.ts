import { Hypher, Language } from './hypher/hypher';

export type HyphenateFunction = (word: string) => string[];

export const createHyphenator = (patterns: Language): HyphenateFunction => {
  const hypher = new Hypher(patterns);
  return (word: string) => {
    return hypher.hyphenate(word);
  };
};
