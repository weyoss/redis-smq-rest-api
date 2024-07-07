/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { IRedisSMQConfig } from 'redis-smq';

export interface IApiServerConfig {
  port?: number;
  hostname?: string;
  basePath?: string;
}

export interface IRedisSMQHttpApiConfig extends IRedisSMQConfig {
  apiServer?: IApiServerConfig;
}
export type IRedisSMQHttpApiParsedConfig = Omit<
  IRedisSMQHttpApiConfig,
  'apiServer'
> & {
  apiServer: Required<IApiServerConfig>;
};
