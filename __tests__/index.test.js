import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NasaCard from '../components/NasaCard';

it('should render NasaCard', () => {
  const { getByText } = render(<NasaCard/>);
  expect(getByText('NASA`s picture of the day')).toBeInTheDocument();
});