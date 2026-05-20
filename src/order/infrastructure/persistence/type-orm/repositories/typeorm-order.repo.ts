import { Injectable, Logger } from '@nestjs/common';
import { IOrderRepository } from 'src/order/application/ports/order.repository';
import { Repository } from 'typeorm';
import { TypeormOrder } from '../entity/typeorm-order.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Order, OrderStatus } from 'src/order/domain/order.entity';
import { OrderRepositorySaveDTO } from 'src/order/application/dtos/order-repository-save.dto';
@Injectable()
export class TypeormOrderRepository implements IOrderRepository {
    constructor(
        @InjectRepository(TypeormOrder)
        private readonly repository: Repository<TypeormOrder>
    ) {}
    async getOrder(id: string): Promise<Order | null> {
        const typeormOrder = await this.repository.findOne({ where: { id } });

        if (!typeormOrder) {
            return null;
        }

        Logger.log(typeormOrder.id, 'TypeOrmOrderRepo:GET');
        return this._toDomain(typeormOrder);
    }
    async save(dto: OrderRepositorySaveDTO): Promise<void> {
        await this.repository.save({
            id: dto.id,
            customerId: dto.customerId,
            totalAmount: dto.totalAmount,
            status: dto.status,
            createdAt: dto.createdAt,
            updatedAt: dto.updatedAt
        });
        Logger.log(dto.id, 'TypeOrmOrderRepo:SAVED');
    }
    private _toDomain(typeormOrder: TypeormOrder): Order {
        const { createdAt, customerId, id, status, totalAmount, updatedAt } =
            typeormOrder;
        return new Order({
            createdAt,
            customerId,
            id,
            status: status as OrderStatus,
            totalAmount,
            updatedAt
        });
    }
}
