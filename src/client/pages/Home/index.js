import { connect } from 'react-redux';
import { baseAction, fetchHackerNews, updateUserData } from '../../actions';
import Home from './Home';

const loadData = (store) => {
  return store.dispatch(fetchHackerNews());
};

const mapStateToProps = (state) => {
  return {
    home: state.home,
  };
};

const mapDispatchToProps = (dispatch) => ({
  baseAction: (action, payload) => dispatch(baseAction(action, payload)),
  fetchHackerNews: (payload) => dispatch(fetchHackerNews(payload)),
  updateUserData: (payload) => dispatch(updateUserData(payload)),
  dispatch,
});

export default {
  component: connect(mapStateToProps, mapDispatchToProps)(Home),
  loadData,
};
