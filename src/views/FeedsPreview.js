import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody, Badge} from "shards-react";
import {logoBaseUrl} from "../configs/config";

import PageTitle from "./../components/common/PageTitle";
import {requestFeeds} from "../actions/feed";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: () => dispatch(requestFeeds(100)),
  }
};

class FeedsPreview extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.onRequestFeeds();
  }

  render() {
    const {feeds} = this.props;

    if(feeds.length){
      return(
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Feeds " subtitle="Components" className="text-sm-left" />
          </Row>

          {/* First Row of Posts */}
          <Row>
            {feeds.map((feed, idx) => (
              <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
                <Card small className="card-post card-post--1">
                  <div
                    className="card-post__image"
                    style={{ backgroundImage: `url(${feed.mediaContent})` }}
                  >
                    <Badge
                      pill
                      className={`card-post__category bg-${feed.source.sourceType.name}`}
                    >
                      {feed.category}
                    </Badge>
                    <div className="card-post__author d-flex">
                      <a
                        href="#"
                        className="card-post__author-avatar card-post__author-avatar--small"
                        style={{ backgroundImage: `url('${require('../images/logo/' + feed.source.name + '.png')}')` }}
                      >
                        Written by {feed.author}
                      </a>
                    </div>
                  </div>
                  <CardBody>
                    <h5 className="card-title">
                      <a href={`${feed.link}`} target="_blank" className="text-fiord-blue">
                        {feed.title}
                      </a>
                    </h5>
                    <div dangerouslySetInnerHTML={{ __html: feed.description }} />
                    <span className="text-muted">{feed.datePublished}</span>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )
    }
    return (<div>Loading...</div>);
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(FeedsPreview);
