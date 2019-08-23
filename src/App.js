import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import { requestFeeds, requestSources, requestCountries } from './actions';


const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
    sources: state.requestSources.feeds,
    isPending: state.requestFeeds.isPending,
    error: state.requestFeeds.error
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: () => dispatch(requestFeeds()),
    onRequestSources: () => dispatch(requestSources()),
    onRequestCountries: () => dispatch(requestCountries()),
  }
};

class App extends Component{

  componentDidMount() {
    this.props.onRequestFeeds();
    this.props.onRequestSources();
    this.props.onRequestCountries();
  }

  render() {
    return <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              })}
            />
          );
        })}
      </div>
    </Router>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
