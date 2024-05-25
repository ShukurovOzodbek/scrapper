import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import sequalize from "./sequalize";
import {JwtModule} from "@nestjs/jwt";
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        sequalize(),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '3d'}
        }),
        UserModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
