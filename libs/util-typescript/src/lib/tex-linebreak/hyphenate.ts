// @ts-expect-error No types available
import Hypher from 'hypher';

// Type version of https://github.dev/robertknight/tex-linebreak/

export interface Patterns {
  id: string;
  leftmin: number;
  rightmin: number;
  patterns: Record<string, string>;
}

export type HyphenateFunction = (word: string) => string[];

export const createHyphenator = (patterns: Patterns): HyphenateFunction => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  const hypher = new Hypher(patterns);
  return (word: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    return hypher.hypenate(word) as string[];
  };
};
