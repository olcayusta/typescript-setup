import Fastify, { FastifyInstance } from "fastify";
import fastifyAutoload from "fastify-autoload";
import fastifyCors from "fastify-cors";
import fastifyCompress from "fastify-compress";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const fastify: FastifyInstance = Fastify({ logger: true });

fastify.register(fastifyCors);
fastify.register(fastifyCompress);

fastify.register(fastifyAutoload, {
  dir: join(dirname(fileURLToPath(import.meta.url)), "routes"),
  forceESM: true,
});

export default fastify;
