/* tslint:disable */
/* eslint-disable */
/**
* @param {string} s
* @returns {string}
*/
export function capitalize_first_letter(s: string): string;
/**
* @param {string} date
* @returns {string}
*/
export function convert_date(date: string): string;
/**
* @returns {string}
*/
export function get_local_date_time(): string;
/**
* @param {string} url
* @returns {boolean}
*/
export function is_valid_url(url: string): boolean;
/**
* @param {string} url
* @returns {string}
*/
export function schoool_url_to_name(url: string): string;
/**
* @param {string} s
* @returns {string}
*/
export function to_capitalized_words(s: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly capitalize_first_letter: (a: number, b: number, c: number) => void;
  readonly convert_date: (a: number, b: number, c: number) => void;
  readonly get_local_date_time: (a: number) => void;
  readonly is_valid_url: (a: number, b: number) => number;
  readonly schoool_url_to_name: (a: number, b: number, c: number) => void;
  readonly to_capitalized_words: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
