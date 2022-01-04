import {Maybe} from '../../graphql/types';
import {LinkComponent} from '../common/link-component/link-component';
import styles from './courses.module.css';

interface CourseRatingProperties {
  complete: boolean;
  rating: Maybe<string> | undefined;
  ratingUrl: Maybe<string> | undefined;
}

export const CourseRating = ({
  complete,
  rating,
  ratingUrl,
}: CourseRatingProperties): JSX.Element | undefined => {
  const ratingLink = (
    content_: string,
    ratingStyle_: string,
  ): JSX.Element | undefined => {
    if (typeof rating === 'string' && typeof ratingUrl !== 'string') {
      return (
        <span className={`${styles.Rating} ${ratingStyle_}`}>
          <div>{content_}</div>
        </span>
      );
    }

    if (typeof rating === 'string' && typeof ratingUrl === 'string') {
      return (
        <span className={`${styles.Rating} ${ratingStyle_}`}>
          <LinkComponent content={content_} href={ratingUrl}/>
        </span>
      );
    }

    return null;
  };

  if (typeof rating !== 'string' && complete) {
    return (
      <span role="img" aria-label="Complete">
        ✅
      </span>
    );
  }

  if (typeof rating !== 'string' && !complete) {
    return (
      <span role="img" aria-label="InComplete">
        ⬜
      </span>
    );
  }

  if (typeof rating === 'string') {
    // eslint-disable-next-line default-case
    switch (rating) {
      case 'FIVE': {
        return ratingLink('5', styles.RatingFive);
      }

      case 'FOUR': {
        return ratingLink('4', styles.RatingFour);
      }

      case 'THREE': {
        return ratingLink('3', styles.RatingThree);
      }

      case 'TWO': {
        return ratingLink('2', styles.RatingTwo);
      }

      case 'ONE': {
        return ratingLink('1', styles.RatingOne);
      }
    }
  }

  return null;
};