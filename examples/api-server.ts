/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { RedisSMQRestApi } from '../src/app/api/RedisSMQRestApi.js';

const restApiServer = new RedisSMQRestApi({ logger: { enabled: true } });
restApiServer.run();
