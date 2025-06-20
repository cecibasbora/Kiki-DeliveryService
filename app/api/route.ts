import { NextResponse } from 'next/server';
import DeliveryForm from '../components/DeliveryForm';

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    const service = new DeliveryForm(); 
    const delivery = await service.createDelivery(data);
    return NextResponse.json(delivery, { status: 201 });
  
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}