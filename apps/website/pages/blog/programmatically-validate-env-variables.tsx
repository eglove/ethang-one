// eslint-disable-next-line unicorn/prevent-abbreviations
import Gist from 'react-gist';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

const ProgrammaticallyValidateEnvironmentVariables = ({
  blog,
}: BlogProperties): JSX.Element => {
  return (
    <StaticBlogLayout blog={blog}>
      <Gist id="eabb2fb95916f7a875987207b7ce3398" />
    </StaticBlogLayout>
  );
};

export default ProgrammaticallyValidateEnvironmentVariables;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('programmatically-validate-env-variables');
}
