import { Cache } from './Cache';

export class MemoryCache implements Cache {
  private cache = new Map<string, string>();

  get(key: string): Promise<string> {
    return Promise.resolve(this.cache.get(key));
  }

  set(key: string, value: string): Promise<void> {
    this.cache.set(key, value);
    return Promise.resolve();
  }
}
