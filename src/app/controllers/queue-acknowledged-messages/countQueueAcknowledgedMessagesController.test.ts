/*
 * Copyright (c)
 * Weyoss <weyoss@protonmail.com>
 * https://github.com/weyoss
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 */

import supertest from 'supertest';
import { describe, expect, it } from 'vitest';
import { createQueue } from '../../../../tests/common/create-queue.js';
import { publishAndAcknowledgeMessage } from '../../../../tests/common/publish-and-acknowledge-message.js';
import { TResponse } from '../../../../tests/types/index.js';
import { CountQueueAcknowledgedMessagesControllerResponseDTO } from '../../dto/controllers/queue-acknowledged-messages/CountQueueAcknowledgedMessagesControllerResponseDTO.js';

describe('countQueueAcknowledgedMessagesController', () => {
  it('HTTP 200 OK', async () => {
    const { queue } = await createQueue('my-queue');
    await publishAndAcknowledgeMessage(queue);
    await publishAndAcknowledgeMessage(queue);

    const request = supertest('http://127.0.0.1:7210');
    const response1: TResponse<CountQueueAcknowledgedMessagesControllerResponseDTO> =
      await request.get(
        `/api/v1/namespaces/${queue.ns}/queues/${queue.name}/total-messages/acknowledged`,
      );
    expect(response1.status).toEqual(200);
    expect(response1.body?.data).toEqual(2);
  });
});
