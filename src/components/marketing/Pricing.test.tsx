import { render, screen } from '@testing-library/react';
import { Pricing } from './Pricing';

// Mock IntersectionObserver for Framer Motion
beforeAll(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('Pricing Component', () => {
  it('renders both plans', () => {
    render(<Pricing />);
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
  });

  it('renders the Mais Popular badge on Pro plan', () => {
    render(<Pricing />);
    expect(screen.getByText('Mais Popular')).toBeInTheDocument();
  });

  it('renders CTA buttons with correct links', () => {
    render(<Pricing />);
    const ctas = screen.getAllByRole('link');
    expect(ctas).toHaveLength(2);
    expect(ctas[0]).toHaveAttribute('href', '/register');
    expect(ctas[1]).toHaveAttribute('href', '/register');
  });
});
