import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer Component', () => {
  it('renders brand name', () => {
    render(<Footer />);
    expect(screen.getByText('Vellum')).toBeInTheDocument();
  });

  it('renders copyright year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
  });
});
