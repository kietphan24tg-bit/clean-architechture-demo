import { Module } from '@nestjs/common';
import { IOrderRepository } from '../../../application/ports/order.repository';
import { InMemoryOrderRepository } from './repositories/in-memory.order-repo';

@Module({
    //declarations dependencies that this module provide
    providers: [
        {
            provide: IOrderRepository, //token which will be used to inject this dependency
            useClass: InMemoryOrderRepository
        }
        //module khác được inject IOrderRepository vào sẽ nhận được instance của InMemoryOrderRepository
    ],
    exports: [IOrderRepository]
})
export class InMemoryOrderPersistanceModule {}
