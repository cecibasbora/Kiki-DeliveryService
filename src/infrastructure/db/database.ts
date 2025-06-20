import { Delivery } from "../../entities/models/Delivery";
import { DeliveryModel } from "../model/DeliveryModel";
import { DeliveryRepository } from "../repository/DeliveryRepository";
import mongoose from "mongoose";

export class Database implements DeliveryRepository {
  async create(delivery: Delivery): Promise<Delivery> {
    const doc = await DeliveryModel.create({
      _id: delivery.id,
      customerName: delivery.customerName,
      destinationAddress: delivery.destinationAddress,
      deliveryDate: delivery.deliveryDate,
    });
    
    return this.toDomain(doc);
  } 

  private toDomain(doc: mongoose.Document): Delivery {
    const obj = doc.toObject();
    return new Delivery({
      id: obj._id.toString(),
      customerName: obj.customerName,
      destinationAddress: obj.destinationAddress,
      deliveryDate: obj.deliveryDate,
    });
  } 
} 