'use client';
import { useState } from 'react';
import { createDelivery } from '../api/api';

export default function DeliveryForm() {
  const [form, setForm] = useState({
    customerName: '',
    destinationAddress: '',
    deliveryDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      await createDelivery({
        ...form,
        deliveryDate: new Date(form.deliveryDate).toISOString(),
      });
      setSuccess(true);
      setForm({
        customerName: '',
        destinationAddress: '',
        deliveryDate: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create delivery');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="submitForm" aria-label="delivery-form">
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="success-message">
          Delivery created successfully!
        </div>
      )}

      <div>
        <label htmlFor="customerName" className="formLabel">
          Nome do cliente
        </label>
        <input
          id="customerName"
          type="text"
          value={form.customerName}
          onChange={(e) => setForm({...form, customerName: e.target.value})}
          required
          className="formInput"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="destinationAddress" className="formLabel">
          Endereço de entrega
        </label>
        <input
          id="destinationAddress"
          type="text"
          value={form.destinationAddress}
          onChange={(e) => setForm({...form, destinationAddress: e.target.value})}
          required
          className="formInput"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="deliveryDate" className="formLabel">
          Data de entrega
        </label>
        <input
          id="deliveryDate"
          type="date"
          value={form.deliveryDate}
          onChange={(e) => setForm({...form, deliveryDate: e.target.value})}
          required
          className="formInput"
          disabled={isSubmitting}
        />
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={isSubmitting ? 'submitting' : ''}
      >
        {isSubmitting ? 'Creating...' : 'Criar Entrega'}
      </button>
    </form>
  );
}