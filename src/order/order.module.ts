import { DynamicModule, Module } from '@nestjs/common';
import { OrderService } from './application/order.service';

@Module({
    providers: [OrderService],
    exports: [OrderService]
})
export class OrderModule {
    static withInfrasctructure(infrastructureModule: DynamicModule): DynamicModule {
        return {
            module: OrderModule,
            imports: [infrastructureModule],
            providers: [OrderService],
            exports: [OrderService]
        };
    }
}
