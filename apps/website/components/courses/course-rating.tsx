import { LinkComponent } from '../common/link-component/link-component';
import styles from './courses.module.css';

interface CourseRatingProperties {
  rating?: number;
  ratingUrl?: string;
}

export const CourseRating = ({
  rating,
  ratingUrl,
}: CourseRatingProperties): JSX.Element | undefined => {
  const ratingLink = (
    content_: string,
    ratingStyle_: string
  ): JSX.Element | undefined => {
    if (typeof rating === 'number' && typeof ratingUrl !== 'string') {
      return (
        <span className={`${styles.Rating} ${ratingStyle_}`}>
          <div>{content_}</div>
        </span>
      );
    }

    if (typeof rating === 'number' && typeof ratingUrl === 'string') {
      return (
        <span className={`${styles.Rating} ${ratingStyle_}`}>
          <LinkComponent linkProperties={{ href: ratingUrl }}>
            {content_}
          </LinkComponent>
        </span>
      );
    }

    return null;
  };

  if (typeof rating !== 'number') {
    return (
      <span role="img" aria-label="Complete">
        ✅
      </span>
    );
  }

  // eslint-disable-next-line default-case
  switch (rating) {
    case 5: {
      return ratingLink('5', styles.RatingFive);
    }

    case 4: {
      return ratingLink('4', styles.RatingFour);
    }

    case 3: {
      return ratingLink('3', styles.RatingThree);
    }

    case 2: {
      return ratingLink('2', styles.RatingTwo);
    }

    case 1: {
      return ratingLink('1', styles.RatingOne);
    }
  }

  return null;
};
