/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisSMQRestApi } from '../../src/app/api/index.js';
import { config } from './config.js';

const server = new RedisSMQRestApi(config);

export async function startApiServer() {
  await server.run();
}

export async function stopApiServer() {
  await server.shutdown();
}
