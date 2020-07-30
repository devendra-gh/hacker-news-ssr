import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';

describe('<Home />', () => {
  let props;

  beforeEach(() => {
    window.scrollTo = jest.fn();
    props = {
      home: {
        newsList: [],
        lineChart: [],
        pageNumber: 0,
        isLoading: false,
      },
      fetchHackerNews: jest.fn(),
      updateUserData: jest.fn(),
    };
  });

  afterEach(cleanup);

  test('Renders <Home /> component correctly', async () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container, getByText } = render(<Home {...props} />);
    expect(container).toMatchSnapshot();
    expect(getByText('No Data Found')).toBeTruthy();
  });

  test('Renders <Home /> component correctly', async () => {
    props = {
      ...props,
      home: {
        ...props.home,
        newsList: [
          {
            objectID: '12345',
            num_comments: 10,
            points: 100,
            title: 'Name',
            url: 'google.com',
            author: 'Author',
            created_at: new Date('Thu Jul 20 2020 23:41:03'),
          },
        ],
        lineChart: [
          ['x', 'Vote'],
          ['12345', 100],
        ],
      },
    };
    // eslint-disable-next-line react/jsx-props-no-spreading
    const { container, getByText } = render(<Home {...props} />);
    expect(container).toMatchSnapshot();
    expect(getByText('10')).toBeTruthy();
    expect(getByText('100')).toBeTruthy();
    expect(getByText('Name')).toBeTruthy();
    expect(getByText('google.com')).toBeTruthy();
    expect(getByText('Author')).toBeTruthy();
    expect(getByText('hide')).toBeTruthy();
  });
});
