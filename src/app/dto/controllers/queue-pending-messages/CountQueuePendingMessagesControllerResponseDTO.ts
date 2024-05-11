/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import { TErrors } from '../../../errors/types/index.js';

export type CountQueuePendingMessagesControllerResponseDTO =
  | readonly [200, number]
  | TErrors['QueueInvalidQueueParameterError']
  | TErrors['QueueQueueNotFoundError']
  | TErrors['QueueMessagesConsumerGroupIdNotSupportedError']
  | TErrors['QueueMessagesConsumerGroupIdRequiredError'];
