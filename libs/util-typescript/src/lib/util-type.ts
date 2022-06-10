export const isNullOrUndefined = <Type>(value?: Type): boolean => {
  return value === null || typeof value === 'undefined';
};

export enum MIME_TYPE {
  javascript = 'application/javascript',
  json = 'application/json',
  jsonLd = 'application/ld+json',
  msWord = 'application/msword',
  pdf = 'application/pdf',
  sql = 'application/sql',
  vndApiJson = 'application/vnd.api+json',
  vndMsExcel = 'application/vnd.ms-excel',
  vndMsPowerpoint = 'application/vnd.ms-powerpoint',
  vndOasisOpenDocument = 'application/vnd.oasis.opendocument.text',
  openOfficePresentation = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  openOfficeSpreadSheet = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  openOfficeWord = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  formUrlEncoded = 'application/x-www-form-urlencoded',
  applicationXml = 'application/xml',
  zip = 'application/zip',
  zstd = 'application/zstd',
  mpeg = 'audio/mpeg',
  ogg = 'audio/ogg',
  avif = 'image/avif',
  jpeg = 'image/jpeg',
  png = 'image/png',
  svgXml = 'image/svg+xml',
  multipartFormData = 'multipart/form-data',
  css = 'text/css',
  csv = 'text/csv',
  html = 'text/html',
  textXml = 'text/xml',
}
