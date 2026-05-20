import { DynamicModule, Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { OrderInfrastructureModule } from './order/infrastructure/order-infrastructure.module';
import { BootstrapConfig } from './bootstrap';

@Module({})
export class AppModule {
    static register(options: BootstrapConfig): DynamicModule {
        return {
            module: AppModule,
            imports: [
                OrderModule.withInfrasctructure(
                    OrderInfrastructureModule.use(options.persistanceDriver)
                )
            ]
        };
    }
}
