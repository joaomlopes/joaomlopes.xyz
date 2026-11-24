import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the profile name', () => {
  const { getByText } = render(<App />);
  expect(getByText(/João Lopes/i)).toBeInTheDocument();
});
