import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    const PORT = process.env.PORT;
    
    await app.listen(PORT, () => {
        console.log('app current link is http://localhost:3030');
    });
}

bootstrap();
