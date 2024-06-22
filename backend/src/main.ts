import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    app.setGlobalPrefix('api');
    
    const PORT = process.env.PORT || 5050;
    
    await app.listen(PORT, () => {
        console.log(`app current link is http://localhost:${PORT}`);
    });
}

bootstrap();
