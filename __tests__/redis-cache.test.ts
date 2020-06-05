import { createClient, RedisClient } from 'redis';
import { StartedTestContainer } from 'testcontainers';

import { RedisCache } from '../src/RedisCache';
import { Cache } from '../src/Cache';
import { startRedisContainer } from '../utils/testcontainers';

describe('RedisCache', () => {
  let redisContainer: StartedTestContainer;
  let redisClient: RedisClient;
  let cache: Cache;


  beforeAll(async () => {
    redisContainer = await startRedisContainer();
    redisClient = createClient(redisContainer.getMappedPort(6379));
    cache = new RedisCache(redisClient)
  });

  afterAll(() => {
    redisClient.quit();

    return redisContainer.stop()
  });

  it('should cache a value', async () => {
    await cache.set('key', 'value');

    expect(await cache.get('key')).toBe('value');
  });
});
