import fastify from "fastify";
import UsersController from "./users";

const app = fastify({ logger: true });

const fastifyEnv = require('@fastify/env')
const schema = {
    type: 'object',
    required: ['PORT'],
    properties: {
        PORT: {
            type: 'string'
        }
    }
}

const options = {
    confKey: 'config',
    schema,
    dotenv: true,
    data: process.env
}

app.register(UsersController)

async function setup() {
    app.register(fastifyEnv, options)
    await app.after()

    await app.ready()
    const PORT: any = process.env.PORT;

    app.listen({ port: PORT }, (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`Server listening at http://localhost:3030`)
    })
}

setup();