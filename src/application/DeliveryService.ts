import { Delivery } from "../entities/models/Delivery";
import { DeliveryRepository } from "../infrastructure/repository/DeliveryRepository";

interface CreateDeliveryRequest {
  customerName: string;
  destinationAddress: string;
  deliveryDate: Date;
}

export class DeliveryService {
  constructor(private repository: DeliveryRepository) {}

  async createDelivery(request: CreateDeliveryRequest): Promise<Delivery> {
    if (!request.customerName || !request.destinationAddress || !request.deliveryDate) {
      throw new Error('All fields are required');
    }
    const delivery = new Delivery({
      ...request,
      id: '', 
    });
    return this.repository.create(delivery);
  }
}