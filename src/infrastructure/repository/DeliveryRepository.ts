import { Delivery } from '@/entities/models/Delivery';
import { DeliveryModel } from '../model/DeliveryModel';

export class DeliveryRepository {
  async create(delivery: Delivery): Promise<Delivery> {
    const doc = await DeliveryModel.create({
      customerName: delivery.customerName,
      destinationAddress: delivery.destinationAddress,
      deliveryDate: delivery.deliveryDate,
    });
    
    return new Delivery({
      id: doc._id.toString(),
      ...doc.toObject()
    });
  }
}