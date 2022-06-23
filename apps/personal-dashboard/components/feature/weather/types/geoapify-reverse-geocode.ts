export interface IGeoApifyReverseGeocode {
  features: Feature[];
  type: string;
}

export interface Feature {
  bbox: number[];
  geometry: Geometry;
  properties: Properties;
  type: string;
}

export interface Properties {
  address_line1: string;
  address_line2: string;
  category: string;
  city: string;
  country: string;
  country_code: string;
  datasource: Datasource;
  distance: number;
  district: string;
  formatted: string;
  housenumber: string;
  lat: number;
  lon: number;
  name: string;
  place_id: string;
  postcode: string;
  rank: Rank;
  result_type: string;
  state: string;
  state_code?: string;
  street: string;
  suburb: string;
}

export interface Datasource {
  attribution: string;
  license: string;
  sourcename: string;
  url: string;
}

export interface Rank {
  popularity: number;
}

export interface Geometry {
  coordinates: number[];
  type: string;
}
