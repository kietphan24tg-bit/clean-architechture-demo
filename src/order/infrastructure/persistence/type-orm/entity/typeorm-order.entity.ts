import {
    Entity,
    Column,
    PrimaryColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { OrderStatus } from 'src/order/domain/order.entity';

const decimalToNumberTransformer = {
    to: (value: number): number => value,
    from: (value: string | number): number => Number(value)
};

@Entity('orders')
export class TypeormOrder {
    @PrimaryColumn('uuid')
    id: string;

    @Column('varchar')
    customerId: string;

    @Column('decimal', {
        precision: 10,
        scale: 2,
        transformer: decimalToNumberTransformer
    })
    totalAmount: number;

    @Column({
        type: 'enum',
        enum: OrderStatus
    })
    status: OrderStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
