import {
  REQUEST_FEEDS_PENDING,
  REQUEST_FEEDS_SUCCESS,
  REQUEST_FEEDS_FAILED,
  START_FEED_RUNNER,
  START_FEED_RUNNER_SUCCESS,
  START_FEED_RUNNER_FAILED,
  STOP_FEED_RUNNER,
  STOP_FEED_RUNNER_SUCCESS,
  STOP_FEED_RUNNER_FAILED,
} from '../constants';

const initialStateFeeds = {
  isPending: false,
  feeds: [],
  error: [],
};
export const requestFeeds = (state=initialStateFeeds, action={}) => {
  switch(action.type){
    case REQUEST_FEEDS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_FEEDS_SUCCESS:
      let feeds = action.payload.map((feed) => {
        let logoPath = "../images/logo/" + feed.source.name + ".png";
        try{
          require(logoPath);
        }catch(err){
          logoPath = "../images/logo/undefined.png";
        }
        feed.logoPath = logoPath;
        return feed;
      });
      return Object.assign({}, state, { feeds: feeds, isPending: false });
    case REQUEST_FEEDS_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

const initialStateFeedRunner = {
  isPending: false,
  feedRunner: false,
  error: [],
};
export const startFeedRunner = (state=initialStateFeedRunner, action={}) => {
  switch(action.type){
    case START_FEED_RUNNER:
      return Object.assign({}, state, { isPending: true });
    case START_FEED_RUNNER_SUCCESS:
      return Object.assign({}, state, { feedRunner: action.payload, isPending: false });
    case START_FEED_RUNNER_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};

export const stopFeedRunner = (state=initialStateFeedRunner, action={}) => {
  switch(action.type){
    case STOP_FEED_RUNNER:
      return Object.assign({}, state, { isPending: true });
    case STOP_FEED_RUNNER_SUCCESS:
      return Object.assign({}, state, { feedRunner: action.payload, isPending: false });
    case STOP_FEED_RUNNER_FAILED:
      return Object.assign({}, state, { error: action.payload, isPending: false });
    default:
      return state;
  }
};
