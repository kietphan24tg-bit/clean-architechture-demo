import { OrderStatus } from 'src/order/domain/order.entity';

export type OrderRepositorySaveDTO = {
    id: string;
    customerId: string;
    totalAmount: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
};
