import { GenericContainer, Wait, StartedTestContainer }  from 'testcontainers';

export async function startRedisContainer(): Promise<StartedTestContainer> {
 return new GenericContainer('redis')
   .withExposedPorts(6379)
   .withWaitStrategy(Wait.forLogMessage("Ready to accept connections"))
   .start();
}
