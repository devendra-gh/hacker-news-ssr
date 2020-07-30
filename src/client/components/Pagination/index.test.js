import React from 'react';
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from './index';

describe('<Pagination />', () => {
  let props;

  beforeEach(() => {
    props = {
      pageNumber: 0,
      isLoading: false,
      onClickPrevNext: jest.fn(),
    };
  });

  afterEach(cleanup);

  test('Renders <Pagination /> component correctly', async () => {
    const { container, getByText } = render(<Pagination />);
    expect(container).toMatchSnapshot();

    const nextButton = await waitFor(() => getByText('Next'));
    fireEvent.click(nextButton);

    const prevButton = await waitFor(() => getByText('Previous'));
    fireEvent.click(prevButton);
  });
});
