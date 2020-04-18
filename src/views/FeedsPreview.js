import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody, Badge, Button, Form} from "shards-react";
import {logoBaseUrl} from "../configs/config";

import PageTitle from "./../components/common/PageTitle";
import {requestFeeds} from "../actions/feed";
import {connect} from "react-redux";
import SelectOptions from "../components/common/SelectOptions";
import {requestCountries} from "../actions/source";

const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
    countries: state.requestCountries.countries,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: (limit, country) => dispatch(requestFeeds(limit, country)),
    onRequestCountries: () => dispatch(requestCountries())
  }
};

class FeedsPreview extends Component{

  constructor(props){
    super(props);
    this.state = {
      filterControls: {
        limit: props.limit || 100,
        country: {id: props.country || ''},
        sourceType: {id: props.sourceType || ''},
        sourceName: props.sourceName || '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.onRequestFeeds(100);
    this.props.onRequestCountries();
  }

  handleSubmit(event) {
    event.preventDefault();
    let filterControls = this.state.filterControls;
    console.log(filterControls);
    this.props.onRequestFeeds(100, filterControls.country.id);
  };

  handleSelectChange = event => {
    const name = event.target.name;
    const id = parseInt(event.target.value, 10);

    this.setState({
      filterControls: {
        ...this.state.filterControls,
        [name]: {
          ...this.state.filterControls[name],
          id
        }
      }
    });
  };

  render() {
    const {feeds, countries, sourceType} = this.props;

    if(feeds.length){
      return(
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="Feeds " subtitle="Components" className="text-sm-left" />
          </Row>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              <SelectOptions
                id={"country"}
                options={countries}
                name="country"
                value={this.state.filterControls.country.id}
                onChange={this.handleSelectChange}
              />
              <Button id="get" type="submit" className={"form-control btn-success"}>Get feeds</Button>
            </Form>
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
                        style={{ backgroundImage: `url(${require("../images/logo/" + feed.logo)})` }}
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
