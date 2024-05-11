/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    deps: {
      interopDefault: false,
    },
    root: resolve('./'),
    setupFiles: './tests/setup.ts',
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    testTimeout: 120000,
    watch: false,
    fileParallelism: false,
    minWorkers: 1,
    maxWorkers: 1,
    maxConcurrency: 1,
    cache: false,
    coverage: {
      enabled: true,
      reportsDirectory: './coverage',
    },
    onConsoleLog(): boolean | void {
      return true;
    },
    onStackTrace(): boolean | void {
      return true;
    },
  },
});
