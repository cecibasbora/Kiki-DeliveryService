'use client';
import { useState } from 'react';

export default function DeliveryForm() {
  const [form, setForm] = useState({
    customerName: '',
    destinationAddress: '',
    deliveryDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();}

  return (
    <form onSubmit={handleSubmit} className="submitForm" aria-label="form">
      <div>
        <label htmlFor="customerName" className="formLabel">Nome do cliente</label>
        <input
        type="text"
        value={form.customerName}
        onChange={(e) => setForm({...form, customerName: e.target.value})}
        required
        className='formInput'
        />
      </div>
      <div>
          <label className="formLabel">Endereço de entrega</label>
          <input
            type="text"
            value={form.destinationAddress}
            onChange={(e) => setForm({...form, customerName: e.target.value})}
            required
            className="formInput"
          />
        </div>

        <div>
          <label className="formLabel">Data de entrega</label>
          <input
            type="date"
            value={form.deliveryDate}
            onChange={(e) => setForm({...form, customerName: e.target.value})}
            required
            className="formInput"
          />
        </div>
      <button type="submit">Criar Entrega</button>
    </form>
  );
}
