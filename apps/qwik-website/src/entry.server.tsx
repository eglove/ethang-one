/**
 * @license
 * Copyright Builder.io, Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */

import {
  QwikLoader,
  renderToString,
  RenderToStringOptions,
  RenderToStringResult,
} from '@builder.io/qwik/server';

import { Main } from './main';

/**
 * Entry point for server-side pre-rendering.
 *
 * @returns a promise when all of the rendering is completed.
 */
export async function render(
  options: RenderToStringOptions
): Promise<RenderToStringResult> {
  return renderToString(
    <html lang="en-US">
      <head>
        <meta charSet="utf8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Main />
        <QwikLoader debug={options.debug} />
      </body>
    </html>,
    {
      ...options,
      // base: '/',
    }
  );
}
