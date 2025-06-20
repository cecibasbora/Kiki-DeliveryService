import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

interface Delivery {
  id: string;
  customerName: string;
  destinationAdress: string;
  deliveryDate: string;
}

const deliveries: Delivery[] = []; 

export async function POST(req: NextRequest) {
  const body = await req.json();

  const delivery = {
    id: uuidv4(),
    customerName: body.customerName,
    destinationAdress: body.customerAddress,
    deliveryDate: body.deliveryDate,
  };

  deliveries.push(delivery);

  return NextResponse.json(delivery, { status: 201 });
}
