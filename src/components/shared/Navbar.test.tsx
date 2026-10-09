import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
  it('renders logo and brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('Vellum')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('Funcionalidades')).toBeInTheDocument();
    expect(screen.getByText('Preços')).toBeInTheDocument();
  });

  it('renders Call to Action buttons', () => {
    render(<Navbar />);
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByText('Começar')).toBeInTheDocument();
  });

  it('has correct links for CTAs', () => {
    render(<Navbar />);
    const loginLink = screen.getByText('Entrar').closest('a');
    const registerLink = screen.getByText('Começar').closest('a');
    
    expect(loginLink).toHaveAttribute('href', '/login');
    expect(registerLink).toHaveAttribute('href', '/register');
  });
});
