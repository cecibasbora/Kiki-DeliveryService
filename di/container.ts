import 'reflect-metadata';
import { container as tsyringeContainer } from 'tsyringe';
import { DeliveryRepository } from '@/infrastructure/repository/DeliveryRepository';
import { DeliveryService } from '../src/application/DeliveryService';
import { DeliveryController } from '../src/interface-adapters/DeliveryController';
import { Database } from '../src/infrastructure/db/database';

tsyringeContainer.register<DeliveryRepository>('DeliveryRepository', {
  useClass: Database,
});

tsyringeContainer.register<DeliveryService>('DeliveryService', {
  useClass: DeliveryService,
});

tsyringeContainer.register<DeliveryController>(DeliveryController, {
  useClass: DeliveryController,
});

export const container = tsyringeContainer;