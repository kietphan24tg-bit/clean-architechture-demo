import { Module } from '@nestjs/common';
import { IOrderRepository } from '../../../application/ports/order.repository';
import { TypeormOrderRepository } from './repositories/typeorm-order.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './typeorm.config';
import { TypeormOrder } from './entity/typeorm-order.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot(databaseConfig),
        TypeOrmModule.forFeature([TypeormOrder])
    ],
    providers: [
        {
            provide: IOrderRepository,
            useClass: TypeormOrderRepository
        }
    ],
    exports: [IOrderRepository]
})
export class TypeormPersistanceModule {}
