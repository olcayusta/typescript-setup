import fastify from './app.js'

const start = async () => {
  
    await fastify.listen(8181)

}

start();