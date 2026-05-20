import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeormOrder } from './entity/typeorm-order.entity';


export const databaseConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    username: 'user',
    password: 'pass',
    database: 'di_new',
    entities: [TypeormOrder],
    synchronize: true,
    logging: true,
    connectTimeoutMS: 30000
};
