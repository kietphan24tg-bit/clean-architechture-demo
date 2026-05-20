import { DynamicModule, Module } from '@nestjs/common';
import { InMemoryOrderPersistanceModule } from './persistence/in-memory/in-memory.module';
import { TypeormPersistanceModule } from './persistence/type-orm/typeorm.module';
import { PersistenceDriver } from 'src/bootstrap';

@Module({})
export class OrderInfrastructureModule {
    static use(driver: PersistenceDriver): DynamicModule {
        const persistenceModule =
            driver === 'in-memory'
                ? InMemoryOrderPersistanceModule
                : TypeormPersistanceModule;

        return {
            module: OrderInfrastructureModule,
            imports: [persistenceModule],
            exports: [persistenceModule]
        };
    }
}
