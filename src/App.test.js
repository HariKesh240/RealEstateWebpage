import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Haven Estates home page', () => {
  render(<App />);
  expect(screen.getAllByText(/HAVEN ESTATES/i).length).toBeGreaterThan(0);
});
