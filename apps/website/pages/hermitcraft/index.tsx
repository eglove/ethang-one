import { HeadTag } from '../../components/common/head-tag/head-tag';
import { HermitStreamHome } from '../../components/hermit-craft/components/hermit-stream-home/hermit-stream-home';
import { HermitContextWrapper } from '../../components/hermit-craft/context/hermit-context';

const Hermitcraft = (): JSX.Element => {
  return (
    <HermitContextWrapper>
      <HeadTag title="HermitCraft" />
      <HermitStreamHome />
    </HermitContextWrapper>
  );
};

export default Hermitcraft;
