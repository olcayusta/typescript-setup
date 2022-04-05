import { FastifyInstance, FastifyPluginAsync } from 'fastify'

export default async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (req, reply) => {
    return {
      root: true,
    }
  })
}
