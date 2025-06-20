interface DeliveryProps {
  id: string;
  customerName: string;
  destinationAddress: string;
  deliveryDate: Date;
}

export class Delivery {
  constructor(private readonly props: DeliveryProps) {}

  get id(): string { return this.props.id; }
  get customerName(): string { return this.props.customerName; }
  get destinationAddress(): string { return this.props.destinationAddress; }
  get deliveryDate(): Date { return this.props.deliveryDate; }
}