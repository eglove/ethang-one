import {v4 as uuidv4} from 'uuid';

export const capitalizeFirstLetter = (
  string: string,
  lowercaseRest = false,
): string => {
  if (string === '') {
    return string;
  }

  if (string.length === 1) {
    return string.toUpperCase();
  }

  if (lowercaseRest) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const camelCaseToWordString = (string: string): string => {
  const words = string.replace(/([A-Z])/g, ' $1');
  return words.charAt(0).toUpperCase() + words.slice(1);
};

export const lowercaseFirstLetter = (string: string): string => string.charAt(0).toLowerCase() + string.slice(1);

export const formatList = (list: string[]): string => {
  // Pop last element if empty in cases where split is used
  // name;hi; = [name, hi, '']
  if (list[list.length - 1] === '') {
    list.pop();
  }

  // @ts-expect-error Typescript is unaware of ListFormat
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return formatter.format(list) as string;
};

export const formatPhoneNumber = (string: string): string | undefined => {
  const phoneRegex = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;

  if (phoneRegex.test(string)) {
    return string.replace(phoneRegex, '($1) $2-$3');
  }

  return undefined;
};

export const removeNonAplhaNumericChars = (string: string): string => string.replace(/\W/g, '');

export const toCapitalizedWords = (string: string): string => {
  const words = string.match(/[A-Za-z][a-z]*|\d+/g) ?? [];

  return words.map(element => capitalizeFirstLetter(element)).join(' ');
};

export const wordStringToCamelCase = (string: string, split = ' '): string => {
  const words = string.split(split);
  const firstWord = words[0].toLowerCase();
  return `${firstWord}${words.slice(1).join('')}`;
};

export const uuid = (): string => uuidv4() || crypto.getRandomValues(new Uint32Array(3)).join('');
