import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import routes from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./assets/pro_styles.css";
import {requestSources, requestCountries} from './actions/source';
import {requestFeeds, startFeedRunner, stopFeedRunner} from './actions/feed';
import auth from "./service/auth";


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
    onRequestFeeds: () => dispatch(requestFeeds(500)),
    onRequestSources: () => dispatch(requestSources()),
    onRequestCountries: () => dispatch(requestCountries()),
    onStartFeedRunner: () => dispatch(startFeedRunner()),
    onStopFeedRunner: () => dispatch(stopFeedRunner())
  }
};

class App extends Component{

  checkAuthentication() {
    if( !auth.isAuth() ){
      return (
        <Redirect to='/login'/>
      )
    }
  }

  render() {
    return <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {this.checkAuthentication()}
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props => {
                props = {...props, noNavbar: route.noNavbar, noSidebar: route.noSidebar, noFooter: route.noFooter };
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                )
              })}
            />
          );
        })}
      </div>
    </Router>
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
