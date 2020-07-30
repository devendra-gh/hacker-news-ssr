import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from '../../components/Head';
import { constant } from '../../constant';
import { setUserData } from '../../utils';
import TableList from '../../components/TableList';
import LineChart from '../../components/LineChart';
import Pagination from '../../components/Pagination';

const Home = (props) => {
  const {
    fetchHackerNews: loadHackerNews,
    updateUserData,
    home: { newsList, lineChart, pageNumber, isLoading },
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadHackerNews();
  }, [loadHackerNews]);

  const onClickNewsList = ({ objectID, hide, points }) => {
    const newUserData = {
      [objectID]: {
        hide,
        points,
      },
    };

    setUserData(newUserData);
    updateUserData({ newsList, newUserData, hide, objectID, points });
  };

  const onClickPrevNext = (e) => {
    const { name } = e.target;
    let currentPageNumber = pageNumber;

    if (name === constant.NEXT) {
      currentPageNumber += 1;
    } else {
      currentPageNumber -= 1;
    }

    loadHackerNews(currentPageNumber);
  };

  return (
    <div role="main" aria-label="Home Page">
      <Head />
      <div className="row">
        <div className="section">
          <TableList isLoading={isLoading} newsList={newsList} onClickNewsList={onClickNewsList} />
          <Pagination
            pageNumber={pageNumber}
            isLoading={isLoading}
            onClickPrevNext={onClickPrevNext}
          />
          {lineChart && lineChart.length ? <LineChart data={lineChart} /> : ''}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.shape({
    newsList: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
        author: PropTypes.string,
        created_at: PropTypes.date,
      })
    ),
    // eslint-disable-next-line react/forbid-prop-types
    lineChart: PropTypes.arrayOf(PropTypes.any),
    pageNumber: PropTypes.number,
    isLoading: PropTypes.bool,
  }),
  fetchHackerNews: PropTypes.func,
  updateUserData: PropTypes.func,
};

Home.defaultProps = {
  home: {
    newsList: [],
    lineChart: [],
    pageNumber: 0,
    isLoading: false,
  },
  fetchHackerNews: null,
  updateUserData: null,
};

export default Home;
