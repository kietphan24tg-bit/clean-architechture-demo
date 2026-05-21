import { Controller, Param, Patch, Post } from '@nestjs/common';
import { OrderService } from '../application/order.service';
import { CreateOrderRequestDTO } from '../application/dtos/create-order-request.dto';
import { Body } from '@nestjs/common';
@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    @Post()
    async create(@Body() dto: CreateOrderRequestDTO) {
        const orderId = await this.orderService.createOrder(dto);
        return { orderId };
    }
    @Patch(':id/confirm')
    async confirm(@Param('id') id: string) {
        await this.orderService.confirmOrder(id);
        return { message: 'Order confirmed' };
    }
}
