import { render, screen } from '@testing-library/react';
import TodaysWeather from './TodaysWeather';

test('renders learn react link', () => {
  render(<TodaysWeather />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});