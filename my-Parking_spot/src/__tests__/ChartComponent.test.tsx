import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LineChart from '../components/chart'

describe('LineChart', () => {
  it('renders the chart component', () => {
    const { container } = render(<LineChart />);
    expect(container).toBeInTheDocument();
  });

  it('displays the correct dataset labels', () => {
    const { getByText } = render(<LineChart />);
    expect(getByText('Revenue')).toBeInTheDocument();
  });

  it('renders the correct dataset values', () => {
    const { getAllByText } = render(<LineChart />);
    ['300', '500', '100', '400', '200'].forEach(value => {
      expect(getAllByText(value)).toHaveLength(1);
    });
  });
});