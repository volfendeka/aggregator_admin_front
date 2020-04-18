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
import Login from "./views/Login";
import EmptyLayout from "./layouts/Empty";


const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
    sources: state.requestSources.feeds,
    isPending: state.requestFeeds.isPending,
    error: state.requestFeeds.error,
    isAuthenticated: (auth.isAuth())
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: (limit, country) => dispatch(requestFeeds(limit, country)),
    onRequestSources: () => dispatch(requestSources()),
    onRequestCountries: () => dispatch(requestCountries()),
    onStartFeedRunner: () => dispatch(startFeedRunner()),
    onStopFeedRunner: () => dispatch(stopFeedRunner())
  }
};

class App extends Component{

  render() {
    return <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        {this.props.isAuthenticated ? this.renderHome(this.props) : this.renderLogin(this.props)}

      </div>
    </Router>
  }

  renderLogin(props){
      return (
          <EmptyLayout {...props}>
              <Login {...props} />
          </EmptyLayout>
      )
  }

  renderHome(props){
    return routes.map((route, index) => {
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
      })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
