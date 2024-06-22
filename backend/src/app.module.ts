import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from "@nestjs/config";
import sequalize from "./sequalize";
import {JwtModule} from "@nestjs/jwt";
import {UsersModule} from './modules/users/users.module';

const configs = [
    ConfigModule.forRoot({
        isGlobal: true,
    }),
    JwtModule.register({
        secret: process.env.JWT_SECRET,
        signOptions: {expiresIn: '3d'}
    }),
    sequalize()
];

const modules = [
    UsersModule
];

@Module({
    imports: [
        ...configs,
        ...modules
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
