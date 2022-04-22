import { NextLink } from '@ethang/react-components';
import Gist from 'react-gist';

import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { blogs } from '../../db/data/blogs/blogs';

function TypescriptFormEnums(): JSX.Element {
  return (
    <StaticBlogLayout blog={blogs.typescriptFormEnums}>
      <p>
        <NextLink
          linkProperties={{
            href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input',
          }}
        >
          HTML Input Types
        </NextLink>
      </p>
      <p>
        <NextLink
          linkProperties={{
            href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete',
          }}
        >
          HTML Autocomplete Attributes
        </NextLink>
      </p>
      <Gist id="e84d2381cd9d121b97ebbcc303a20c59" />
      <Gist id="574eea0f800dd6055cb1c0f1d0ac7bd4" />
    </StaticBlogLayout>
  );
}

export default TypescriptFormEnums;
