import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero Component', () => {
  it('renders title words correctly', () => {
    render(<Hero />);
    expect(screen.getByText('Domine')).toBeInTheDocument();
    expect(screen.getByText('qualquer')).toBeInTheDocument();
    expect(screen.getByText('idioma')).toBeInTheDocument();
    expect(screen.getByText('com')).toBeInTheDocument();
    expect(screen.getByText('IA')).toBeInTheDocument();
  });

  it('renders subtitle correctly', () => {
    render(<Hero />);
    expect(screen.getByText(/O leitor técnico e tutor de pronúncia definitivo/i)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Hero />);
    const ctaButton = screen.getByText('Experimente o Vellum');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.closest('a')).toHaveAttribute('href', '/register');
  });
});
