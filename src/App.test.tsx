import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    const headerElement = document.querySelector('header');
    expect(headerElement).toBeInTheDocument();
  });
});