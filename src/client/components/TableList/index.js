/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
import React from 'react';
import PropTypes from 'prop-types';
import ReactTimeAgo from 'react-time-ago';
import JavascriptTimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { upvote, tableLoader } from '../../utils/style';

JavascriptTimeAgo.addLocale(en);

const TableList = (props) => {
  const { newsList, isLoading, onClickNewsList } = props;

  return (
    <table className="striped responsive-table" role="contentinfo" aria-label="Hacker News List">
      <thead>
        <tr>
          <th>Comments</th>
          <th>Vote count</th>
          <th>UpVote</th>
          <th>New Details</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {newsList && newsList.length ? (
          newsList.map((news) => {
            return (
              <tr key={`tr-${news.objectID}-key`} title={news.objectID}>
                <td>{news.num_comments || 0}</td>
                <td>{news.points || 0}</td>
                <td>
                  <button
                    role="navigation"
                    aria-label="UP Vote"
                    disabled={isLoading}
                    onClick={() => {
                      onClickNewsList({
                        objectID: news.objectID,
                        hide: false,
                        points: news.points + 1,
                      });
                    }}
                    type="button"
                    style={upvote(isLoading)}
                  >
                    <i className="material-icons medium">arrow_drop_up</i>
                  </button>
                </td>
                <td>
                  <h6>{`${news.title}`}</h6>
                  <small>{`(${news.url}) `}</small>
                  <small>by</small>
                  <strong>{` ${news.author} `}</strong>
                  <small>
                    {news.created_at instanceof Date && !isNaN(news.created_at) ? (
                      <ReactTimeAgo
                        title={new Date(news.created_at)}
                        date={new Date(news.created_at)}
                      />
                    ) : (
                      news.created_at
                    )}
                  </small>
                </td>
                <td>
                  <button
                    role="navigation"
                    aria-label="Hide News"
                    className="btn-small"
                    type="button"
                    onClick={() => {
                      onClickNewsList({
                        objectID: news.objectID,
                        hide: true,
                        points: news.points,
                      });
                    }}
                  >
                    hide
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="5">
              {isLoading ? (
                <div style={tableLoader}>
                  <div className="preloader-wrapper active">
                    <div className="spinner-layer spinner-red-only">
                      <div className="circle-clipper left">
                        <div className="circle" />
                      </div>
                      <div className="gap-patch">
                        <div className="circle" />
                      </div>
                      <div className="circle-clipper right">
                        <div className="circle" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>No Data Found</div>
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

TableList.propTypes = {
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
  isLoading: PropTypes.bool,
  onClickNewsList: PropTypes.func,
};

TableList.defaultProps = {
  newsList: {
    objectID: '',
    num_comments: 0,
    points: 0,
    title: '',
    url: '',
    author: '',
    created_at: '',
  },
  isLoading: false,
  onClickNewsList: null,
};

export default TableList;
