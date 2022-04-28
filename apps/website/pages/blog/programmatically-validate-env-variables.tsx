// eslint-disable-next-line unicorn/prevent-abbreviations
import Gist from 'react-gist';

import { blogs } from '../../../../libs/local-database/src/lib/data/blogs/blogs';
import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ProgrammaticallyValidateEnvironmentVariables(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.programaticallyValidateEnvVariables}>
      <Gist id="eabb2fb95916f7a875987207b7ce3398" />
    </StaticBlogLayout>
  );
}

export default ProgrammaticallyValidateEnvironmentVariables;
