import Gist from 'react-gist';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { blogSlug } from '../../database/data/blogs';

const TypescriptFormEnums = (): JSX.Element => {
  return (
    <StaticBlogLayout slug={blogSlug.typescriptFormEnums}>
      <p>
        <LinkComponent
          linkProperties={{
            href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
          }}
        >
          HTML Input Types
        </LinkComponent>
      </p>
      <p>
        <LinkComponent
          linkProperties={{
            href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete',
          }}
        >
          HTML Autocomplete Attributes
        </LinkComponent>
      </p>
      <Gist id="e84d2381cd9d121b97ebbcc303a20c59" />
      <Gist id="574eea0f800dd6055cb1c0f1d0ac7bd4" />
    </StaticBlogLayout>
  );
};

export default TypescriptFormEnums;
