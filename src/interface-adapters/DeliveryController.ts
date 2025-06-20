import { NextResponse } from 'next/server';
import { DeliveryService } from '@/application/DeliveryService';

interface DeliveryDTO {
  id: string;
  customerName: string;
  destinationAddress: string;
  deliveryDate: string;
}

export class DeliveryController {
  constructor(private service: DeliveryService) {}

  async handlePost(request: Request): Promise<NextResponse> {
    try {
      const body = await request.json();
      const delivery = await this.service.createDelivery({
        customerName: body.customerName,
        destinationAddress: body.destinationAddress,
        deliveryDate: new Date(body.deliveryDate)
      });

      const responseDTO: DeliveryDTO = {
        id: delivery.id,
        customerName: delivery.customerName,
        destinationAddress: delivery.destinationAddress,
        deliveryDate: delivery.deliveryDate.toISOString(),
      };

      return NextResponse.json(responseDTO, { status: 201 });
    } catch (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }
  }
}