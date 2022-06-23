import { ENV_KEYS, getConst } from '@ethang/node-environment';
import { isBrowser, swrFetcher } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';
import { useOpenWeather } from 'react-open-weather';
import useSWR from 'swr';

import { IGeoApifyReverseGeocode } from '../types/geoapify-reverse-geocode';

export type UserWeatherLayoutReturn = {
  data: unknown;
  errorMessage?: string;
  isLoading: boolean;
  locationName?: string;
};

export const useWeatherLayout = (): UserWeatherLayoutReturn => {
  const [geoApifyUrl, setGeoApifyUrl] = useState<string>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [locationName, setLocationName] = useState<string>('');
  const { data: geoCodeData } = useSWR<IGeoApifyReverseGeocode>(
    typeof geoApifyUrl === 'undefined' ? null : geoApifyUrl,
    swrFetcher
  );

  useEffect(() => {
    if (isBrowser) {
      navigator.geolocation.getCurrentPosition(data_ => {
        const { latitude: latitude_, longitude: longitude_ } = data_.coords;
        const url = new URL('https://api.geoapify.com/v1/geocode/reverse');
        url.searchParams.set('lat', String(latitude_));
        url.searchParams.set('lon', String(longitude_));
        url.searchParams.set(
          'apiKey',
          getConst(ENV_KEYS.GEOAPIFY_REVERSE_GEOCODE)
        );

        setLatitude(latitude_);
        setLongitude(longitude_);
        setGeoApifyUrl(url.href);
      });
    }
  }, []);

  useEffect(() => {
    if (
      typeof geoCodeData !== 'undefined' &&
      typeof latitude === 'number' &&
      typeof longitude === 'number'
    ) {
      const { city, state_code } = geoCodeData.features[0].properties;
      const state = typeof state_code === 'undefined' ? '' : `, ${state_code}`;
      setLocationName(() => {
        return `${city}${state}`;
      });
    }
  }, [geoCodeData, latitude, longitude]);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: getConst(ENV_KEYS.OPEN_WEATHER_KEY),
    lang: 'en',
    lat: latitude,
    lon: longitude,
    unit: 'imperial',
  }) as Pick<UserWeatherLayoutReturn, 'data' | 'errorMessage' | 'isLoading'>;

  return { data, errorMessage, isLoading, locationName };
};
