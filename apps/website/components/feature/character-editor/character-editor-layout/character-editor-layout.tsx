import { useState } from 'react';

import { Container } from '../../../common/container/container';
import { Character } from '../character/character';
import { defaultClothesColor, defaultSkinColor } from '../constants';
import { ControlPane } from '../control-pane/control-pane';
import { MaxWidthWrapper } from '../max-width-wrapper/max-width-wrapper';
import styles from './character-editor-layout.module.css';
import {
  accessoryOptions,
  bodyOptions,
  clothesColorOptions,
  faceOptions,
  headOptions,
  skinColorOptions,
} from './character-editor-layout-util';

export function CharacterEditorLayout(): JSX.Element {
  const [body, setBody] = useState(0);
  const [head, setHead] = useState(0);
  const [face, setFace] = useState(0);
  const [accessory, setAccessory] = useState(0);
  const [skinColor, setSkinColor] = useState(defaultSkinColor);
  const [clothesColor, setClothesColor] = useState(defaultClothesColor);

  return (
    <Container>
      <main className={styles.CharacterEditor}>
        <div className={styles.PerspectiveEffect} />
        <MaxWidthWrapper className={styles.ControlColumn}>
          <header className={styles.Header}>
            <h1 className={styles.Title}>Create Your Character</h1>
            <p className={styles.Description}>
              Customize your character&apos;s look and style using the controls
              below. What sort of adventure will you embark on?
            </p>
          </header>
          <>
            <ControlPane
              currentOption={body}
              handleSelectOption={setBody}
              options={bodyOptions}
              title="Bodies"
            />
            <ControlPane
              currentOption={head}
              handleSelectOption={setHead}
              options={headOptions}
              title="Heads"
            />
            <ControlPane
              currentOption={face}
              handleSelectOption={setFace}
              options={faceOptions}
              title="Faces"
            />
            <ControlPane
              currentOption={accessory}
              handleSelectOption={setAccessory}
              options={accessoryOptions}
              title="Accessories"
            />
            <ControlPane
              currentOption={skinColor}
              handleSelectOption={setSkinColor}
              options={skinColorOptions}
              title="Skin Color"
            />
            <ControlPane
              currentOption={clothesColor}
              handleSelectOption={setClothesColor}
              options={clothesColorOptions}
              title="Clothing Color"
            />
          </>
        </MaxWidthWrapper>
        <div className={styles.CharacterWrapper}>
          <Character
            accessory={accessory}
            body={body}
            clothesColor={clothesColor}
            face={face}
            head={head}
            skinColor={skinColor}
          />
        </div>
      </main>
    </Container>
  );
}
