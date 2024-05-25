import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./entities/user.entity";

export default () => {
    return SequelizeModule.forRootAsync({
        useFactory: () => ({
            dialect: 'postgres',
            password: process.env.DB_PASSWORD,
            username: process.env.DB_USER,
            port: +process.env.DB_PORT,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            autoLoadModels: true,
            models: [User]
        })
    })
}