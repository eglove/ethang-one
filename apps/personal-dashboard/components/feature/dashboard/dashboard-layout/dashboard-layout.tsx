import ReadingLayout from '../../reading/reading-layout/reading-layout';
import { WeatherLayout } from '../../weather/weather-layout/weather-layout';
import styles from './index.module.css';

export function DashboardLayout(): JSX.Element {
  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.Weather}>
        <WeatherLayout />
      </div>
      <div className={styles.Reading}>
        <ReadingLayout />
      </div>
      <div className={styles.Health}>Health</div>
      <div className={styles.Finance}>Finance</div>
      <div className={styles.Routine}>Routine</div>
      <div className={styles.OnlineEducation}>OnlineEducation</div>
    </div>
  );
}
