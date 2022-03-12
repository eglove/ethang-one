// eslint-disable-next-line unicorn/prevent-abbreviations
import Gist from 'react-gist';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { BlogProperties, blogQuery } from '../../util/query';

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
export async function getStaticProps(): Promise<{
  props: BlogProperties;
}> {
  const blog = await blogQuery('programmatically-validate-env-variables');

  return {
    props: {
      blog,
    },
  };
}
