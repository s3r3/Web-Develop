import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Spaces from '../components/availableSpaces'
describe('Spaces Component', () => {
  it('renders the component correctly', () => {
    const { getByText } = render(<Spaces />);
    expect(getByText('Available Spaces')).toBeInTheDocument();
  });

  it('displays the count as expected', async () => {
    jest.useFakeTimers();
    const { getByText, findByText } = render(<Spaces />);
    
    // Initial count
    expect(getByText('0+')).toBeInTheDocument();

    // Fast forward by duration + 1 second to make sure the animation is over
    jest.advanceTimersByTime(6000);

    // Final count
    expect(await findByText('300+')).toBeInTheDocument();

    jest.useRealTimers();
  });
});