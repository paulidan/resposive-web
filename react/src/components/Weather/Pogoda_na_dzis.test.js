import { render, screen } from '@testing-library/react';
import Pogoda_na_dzis from './Pogoda_na_dzis';

test('renders learn react link', () => {
  render(<Pogoda_na_dzis />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});