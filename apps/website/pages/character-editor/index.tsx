import { HeadTag } from '../../components/common/head-tag/head-tag';
import { CharacterEditorLayout } from '../../components/feature/character-editor/character-editor-layout/character-editor-layout';

function CharacterEditor(): JSX.Element {
  return (
    <>
      <HeadTag title="Character Editor" />
      <CharacterEditorLayout />
    </>
  );
}

export default CharacterEditor;
