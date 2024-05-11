/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisSmqRestApi } from '../index.js';

const restApiServer = new RedisSmqRestApi({ logger: { enabled: true } });
restApiServer.run();
