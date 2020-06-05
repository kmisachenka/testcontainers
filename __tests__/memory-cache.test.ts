import { MemoryCache } from '../src/MemoryCache';
import { Cache } from '../src/Cache';

describe('MemoryCache', () => {
  let cache: Cache;

  beforeAll(() => {
    cache = new MemoryCache()
  });

  it('should cache a value', async () => {
    await cache.set('key', 'value');

    expect(await cache.get('key')).toBe('value');
  });
});
