import { User } from '@models/User'
import { FastifyInstance } from 'fastify'

const User = async (fastify: FastifyInstance) => {
  fastify.get('/', async (request, reply) => {
    const user: User = {
      id: 101,
      displayName: 'Supergirl',
      picture: 'Picture_Url',
    }
    return user
  })
}

export default User
