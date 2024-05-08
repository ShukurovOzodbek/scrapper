import fastify from 'fastify'

const server = fastify()

const PORT: any = process.env.PORT;

console.log(PORT);


server.get('/ping', async (request, reply) => {
    return 'pong\n'
})

server.listen({ port: PORT }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})