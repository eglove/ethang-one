import styles from './character.module.css';
import { AccessoriesLayout } from './svg-parts/accessories/accessories-layout';
import { BodiesLayout } from './svg-parts/bodies/bodies-layout';
import { FacesLayout } from './svg-parts/faces/faces-layout';
import { HeadsLayout } from './svg-parts/heads/heads-layout';

interface CharacterProperties {
  body: number;
  head: number;
  face: number;
  accessory: number;
  skinColor: string;
  clothesColor: string;
}

export function Character({
  body,
  head,
  face,
  accessory,
  skinColor,
  clothesColor,
}: CharacterProperties): JSX.Element | undefined {
  return (
    <svg
      className={styles.Character}
      fill="none"
      viewBox="0 0 1935 3033"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <BodiesLayout
            body={body}
            clothesColor={clothesColor}
            skinColor={skinColor}
          />
        </g>
        <g clipRule="evenodd" fillRule="evenodd">
          <HeadsLayout head={head} skinColor={skinColor} />
        </g>
        <g>
          <FacesLayout face={face} />
        </g>
        <g>
          <AccessoriesLayout accessory={accessory} />
        </g>
      </g>
    </svg>
  );
}
