<div align="center" style="text-align: center">
    <p><a href="https://github.com/weyoss/redis-smq-rest-api"><img alt="RedisSMQ" src="./logo.png?v=202312182134" /></a></p>
    <p>A RESTful API for RedisSMQ</p>
</div>

> **Important Notice**
>
> This repository has been archived and is no longer maintained. The RedisSMQ Monitor functionality has been moved to the main [redis-smq repository](https://github.com/weyoss/redis-smq). Please refer to the main repository for the latest updates and documentation.
>
> **What this means:**
>
> - No further issues or pull requests will be accepted in this repository
> - All future updates and improvements will be made in the main redis-smq repository
> - Please direct all questions and contributions to the main repository

# RedisSMQ REST API

RedisSMQ REST API offers an HTTP interface which allows any web capable application to interact with the RedisSMQ 
message queue using a RESTful API.

Currently, RedisSMQ REST API is distributed as an RC release and is still in active development.

To start using the REST API make sure that you are using the latest [RedisSMQ V8 RC](https://github.com/weyoss/redis-smq) release.

## Features

- A clean and simple implementation as always :).
- Strict Request/Response validation based on [JSON Schema](https://json-schema.org/).
- Native [OpenAPI v3](https://www.openapis.org/) support and [Swagger](https://swagger.io/) for developers.
- Rigorously tested codebase with code coverage no less than 90%.
- Both ESM & CJS modules are supported.

## Installation

```shell
npm i redis-smq-rest-api@rc --save
```

## Configuration

The REST API configuration extends [RedisSMQ Configuration](https://github.com/weyoss/redis-smq/blob/master/docs/configuration.md) 
while adding the API server configuration.

```typescript
interface IApiServerConfig {
  port?: number;
  hostname?: string;
  basePath?: string;
}

interface IRedisSMQHttpApiConfig extends IRedisSMQConfig {
  apiServer?: IApiServerConfig;
}
```

## Usage

```typescript
import { IRedisSMQHttpApiConfig, RedisSMQRestApi } from 'redis-smq-rest-api';

const config: IRedisSMQHttpApiConfig = {
    redis: {
        client: ERedisConfigClient.IOREDIS,
        options: {
            host: '127.0.0.1',
            port: 6379,
        },
    },
    apiServer: {
        host: '127.0.0.1',
        port: 7210
    }
};

const apiServer = new RedisSMQRestApi(config);
apiServer.run();
```

## API Reference

Once your RedisSMQ API server is up and running you may view the API Reference and try it directly from 
the Swagger UI which is accessible via `http://<HOSTAME:PORT>/docs`.

## OpenAPI Specification

The OpenAPI specification is available at `http://<HOSTAME:PORT>/assets/openapi-specs.json`
