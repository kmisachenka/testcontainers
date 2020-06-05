import { RedisClient } from 'redis'

import { Cache } from './Cache';

export class RedisCache implements Cache {

  private client: RedisClient;

  constructor(client: RedisClient) {
    this.client = client;
  }

  get(key: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.client.get(key, (error, reply) => {
        if (error) reject(error);

        resolve(reply);
      })
    })
  }

  set(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.set(key, value, (error) => {
        if (error) reject(error);

        resolve();
      })
    })
  }



}
