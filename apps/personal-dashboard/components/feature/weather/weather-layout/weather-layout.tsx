import ReactWeather from 'react-open-weather';

import { useWeatherLayout } from './use-weather-layout';
import styles from './weather-layout.module.css';

export function WeatherLayout(): JSX.Element {
  const { data, errorMessage, isLoading, locationName } = useWeatherLayout();

  return (
    <>
      <div className={styles.LocationName}>{locationName}</div>
      <ReactWeather
        showForecast
        data={data}
        errorMessage={errorMessage}
        isLoading={isLoading}
        lang="en"
      />
    </>
  );
}
