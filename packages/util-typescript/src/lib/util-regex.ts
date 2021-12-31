export const allDigitsInString = (string: string): string | undefined => string.match(/\d+/g)?.join('');

export const isValidHostname = (string: string): boolean => /^(([\dA-Za-z]|[\dA-Za-z][\dA-Za-z-]*[\dA-Za-z])\.)*([\dA-Za-z]|[\dA-Za-z][\dA-Za-z-]*[\dA-Za-z])$/.test(
  string,
);

export const isValidPhoneNumber = (string: string): boolean => /1?\W*([2-9][0-8]\d)\W*([2-9]\d{2})\W*(\d{4})(\se?x?t?(\d*))?/g.test(
  string,
);

export const isValidUrl = (string: string): boolean => /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\w$&+,:;=-]+@)?[\d.A-Za-z-]+|(?:www\.|[\w$&+,:;=-]+@)[\d.A-Za-z-]+)((?:\/[\w%+./~-]*)?\??[\w%&+.;=@-]*#?[\w!./\\]*)?)/.test(
  string,
);

export const isAlphaNumeric = (string: string): boolean => /^[\da-z]+$/i.test(string);
