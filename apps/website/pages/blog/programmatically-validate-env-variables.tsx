// eslint-disable-next-line unicorn/prevent-abbreviations
import { blogs } from '@ethang/local-database';
import { GistEmbed } from '@ethang/react-components';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';

function ProgrammaticallyValidateEnvironmentVariables(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.programaticallyValidateEnvVariables}>
      <GistEmbed id="eabb2fb95916f7a875987207b7ce3398" />
    </StaticBlogLayout>
  );
}

export default ProgrammaticallyValidateEnvironmentVariables;
