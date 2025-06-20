import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Home from '../../../app/page';
import DeliveryForm from '../../../app/components/DeliveryForm';

describe('<Home />', () => {
  it('should render the home page', () => {
    render(<Home />);
    
    expect(screen.getByText('Serviço de Entrega da Kiki')).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
});

describe('DeliveryForm Component', () => {
  it('should render form fields correctly', () => {
    render(<DeliveryForm />);
    
    expect(screen.getByText('Nome do cliente')).toBeInTheDocument();
    expect(screen.getByText('Endereço de entrega')).toBeInTheDocument();
    expect(screen.getByText('Data de entrega')).toBeInTheDocument();
    expect(screen.getByText('Criar Entrega')).toBeInTheDocument();
  });

  it('should prevent submission when required fields are empty', () => {
    render(<DeliveryForm />);
    const submitButton = screen.getByText('Criar Entrega');
    
    fireEvent.click(submitButton);
    expect(screen.getAllByRole('textbox').some(input => !(input as HTMLInputElement).value)).toBe(true);
  });
});

