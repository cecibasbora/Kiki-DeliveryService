const API_BASE_URL = '/api/deliveries';

export interface Delivery {
  id: string;
  customerName: string;
  destinationAddress: string;
  deliveryDate: string;
}

export async function createDelivery(deliveryData: Omit<Delivery, 'id'>): Promise<Delivery> {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(deliveryData),
  });
  if (!response.ok) throw new Error('Failed to create delivery');
  return response.json();
}