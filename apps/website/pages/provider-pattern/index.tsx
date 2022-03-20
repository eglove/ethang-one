import { HeadTag } from '../../components/common/head-tag/head-tag';
import { ProviderPatternLayout } from '../../components/provider-pattern/components/provider-pattern-layout';
import { ProviderWrapper } from '../../components/provider-pattern/context/provider-context';

function ProviderPattern(): JSX.Element {
  return (
    <ProviderWrapper>
      <HeadTag title="Provider Pattern" />
      <ProviderPatternLayout />
    </ProviderWrapper>
  );
}

export default ProviderPattern;
