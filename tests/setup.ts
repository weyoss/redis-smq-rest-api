/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { Configuration } from 'redis-smq';
import { afterAll, afterEach, beforeAll, beforeEach } from 'vitest';
import { config } from './common/config.js';
import {
  getRedisClientInstance,
  shutdownRedisClient,
} from './common/redis-client.js';
import { startApiServer, stopApiServer } from './common/start-api-server.js';

beforeAll(async () => {
  await startApiServer();
});

afterAll(async () => {
  await stopApiServer();
  await shutdownRedisClient();
});

beforeEach(async () => {
  const redis = await getRedisClientInstance();
  await redis.flushallAsync();
  Configuration.reset();
  Configuration.getSetConfig(config);
});

afterEach(async () => void 0);
