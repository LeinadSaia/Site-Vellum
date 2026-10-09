import { render, screen } from '@testing-library/react';
import { Features } from './Features';

// Mock IntersectionObserver for Framer Motion's whileInView
beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Features Component', () => {
  it('renders section title correctly', () => {
    render(<Features />);
    expect(screen.getByText(/Uma plataforma de/i)).toBeInTheDocument();
    expect(screen.getByText('alto desempenho')).toBeInTheDocument();
  });

  it('renders all three feature titles', () => {
    render(<Features />);
    expect(screen.getByText('Leitor Técnico Inteligente')).toBeInTheDocument();
    expect(screen.getByText('Tutor de Pronúncia')).toBeInTheDocument();
    expect(screen.getByText('Explicação Profunda')).toBeInTheDocument();
  });
});
