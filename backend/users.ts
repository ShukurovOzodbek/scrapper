// controller file
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

async function UsersController(fastify: FastifyInstance, opts: any): Promise<void> {
    fastify.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
        
        reply.send({ status: 'ok' })
    });

    fastify.get('/show', async (request: FastifyRequest, reply: FastifyReply) => {

        reply.send({ status: 'ok' })
    });
};


export default UsersController;