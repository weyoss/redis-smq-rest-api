/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import bluebird from 'bluebird';
import {
  createRedisClient,
  ERedisConfigClient,
  IRedisClient,
} from 'redis-smq-common';
import { config } from './config.js';

const { promisify, promisifyAll } = bluebird;

let redisClient: IRedisClient | null = null;
const createRedisClientAsync = promisify(createRedisClient);

export async function getRedisClientInstance() {
  if (!redisClient) {
    const conf = config?.redis || { client: ERedisConfigClient.IOREDIS };
    redisClient = await createRedisClientAsync(conf);
  }
  return promisifyAll(redisClient);
}

export async function shutdownRedisClient() {
  if (redisClient) {
    await promisifyAll(redisClient).haltAsync();
  }
}
