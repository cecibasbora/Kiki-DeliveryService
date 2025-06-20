import { POST } from "../../../app/api/route";

describe('POST method', () => {
  it('should create a new delivery', async () => {
    const mockRequest = {
      json: async () => ({
        customerName: "Osono",
        destinationAddress: "Rua Magnólia 231",
        deliveryDate: "06/07/2025"
      })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    const response = await POST(mockRequest);
    expect(response.status).toBe(201);
  });
});