import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReactTable from "react-table";
import {Container, Row, Col, Card, CardHeader, CardBody} from "shards-react";
import PageTitle from "./../components/common/PageTitle";
import {requestFeedsByDay, requestFeedsBySource, requestFeedsBySourceDay, requestSourceStats, requestGeneralCounters} from "../actions/overview";
import {requestSources} from "../actions/source"
import SmallStats from "./../components/common/SmallStats";
import FeedsBySource from "../components/overview/FeedsBySource";
import FeedsOverview from "./../components/overview/FeedsOverview";


const mapStateToProps = (state) => {
  return{
    feedsBySource: state.requestFeedsBySource,
    feedsByDay: state.requestFeedsByDay,
    feedsBySourceDay: state.requestFeedsBySourceDay,
    sourceStats: state.requestSourceStats.sourceStats,
    generalCounters: state.requestGeneralCounters,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSources: () => dispatch(requestSources()),
    onRequestSourceStats: () => dispatch(requestSourceStats()),
    onRequestFeedsByDay: () => dispatch(requestFeedsByDay()),
    onRequestFeedsBySource: () => dispatch(requestFeedsBySource()),
    onRequestFeedsBySourceDay: () => dispatch(requestFeedsBySourceDay()),
    onRequestGeneralCounters: () => dispatch(requestGeneralCounters()),
  }
};

class Overview extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.onRequestGeneralCounters();
    this.props.onRequestFeedsByDay();
    this.props.onRequestFeedsBySource();
    this.props.onRequestFeedsBySourceDay();
    this.props.onRequestSourceStats();
  }

  render() {
    const {generalCounters, feedsByDay, feedsBySource, feedsBySourceDay, sourceStats} = this.props;

    if(!feedsByDay.isPending && !feedsBySource.isPending && !feedsBySourceDay.isPending && !sourceStats.isPending && !generalCounters.isPending){
      const bigChartsData = prepareBigChartsData(feedsByDay);
      const pieChartData = preparePieChartsData(feedsBySourceDay);
      const smallStats = prepareSmallStatChartsData(generalCounters);
      return(
        <Container fluid className="main-content-container px-4">
          {/* Page Header */}
          <Row noGutters className="page-header py-4">
            <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
          </Row>

          {/* Small Stats Blocks */}
          <Row>
            {smallStats.map((stats, idx) => (
              <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                <SmallStats
                  id={`small-stats-${idx}`}
                  variation="1"
                  chartData={stats.datasets}
                  chartLabels={stats.chartLabels}
                  label={stats.label}
                  value={stats.value}
                  percentage={stats.percentage}
                  increase={stats.increase}
                  decrease={stats.decrease}
                />
              </Col>
            ))}
          </Row>

          <Row>
            {/* Feeds Overview */}
            <Col lg="8" md="12" sm="12" className="mb-4">
              <FeedsOverview chartData={bigChartsData}/>
            </Col>
            {/* Feeds by Source */}
            <Col lg="4" md="6" sm="12" className="mb-4">
              <FeedsBySource chartData={pieChartData} />
            </Col>
          </Row>

          <Row>
            <Col>
              <Card small className="mb-4">
                <CardHeader className="border-bottom">
                  <h6 className="m-0">Source stats</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                  <ReactTable
                    data={sourceStats}
                    columns={[
                      {
                        columns: [
                          {
                            Header: "ID",
                            accessor: "id"
                          },
                          {
                            Header: "Name",
                            accessor: "name",
                          },
                          {
                            Header: "Type",
                            accessor: "sourceType.name"
                          },
                          {
                            Header: "Country",
                            accessor: "country.name"
                          },
                          {
                            Header: "Status",
                            accessor: "sourceStatus.name"
                          },
                        ]
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                  </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      )
    }

    return (<div>Loading...</div>);

  }
};

const prepareSmallStatChartsData = (generalCounters) => {
  console.log(generalCounters);
  let feeds_amount = 0;
  let active_sources = 0;
  if(generalCounters.generalCounters['feeds_amount'] && generalCounters.generalCounters['active_sources']){
    feeds_amount = generalCounters.generalCounters['feeds_amount'][0];
    active_sources = generalCounters.generalCounters['active_sources'][0][0];
  }
  return [
      {
        label: "Feeds",
        value: feeds_amount,
        percentage: "4.7%",
        increase: true,
        chartLabels: [null],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(0, 184, 216, 0.1)",
            borderColor: "rgb(0, 184, 216)",
            data: [1]
          }
        ]
      },
      {
        label: "Active sources",
        value: active_sources,
        percentage: "12.4",
        increase: true,
        chartLabels: [null],
        attrs: { md: "6", sm: "6" },
        datasets: [
          {
            label: "Today",
            fill: "start",
            borderWidth: 1.5,
            backgroundColor: "rgba(23,198,113,0.1)",
            borderColor: "rgb(23,198,113)",
            data: [1]
          }
        ]
      },

    ]
};

const prepareBigChartsData = (feedsByDay) => {
  let dataAmounts = [1, 1, 1];
  let dataLabels = [1,2,3];
  if(feedsByDay.feedsByDay.length > 0){
    dataAmounts = feedsByDay.feedsByDay.map( item => item[0]);
    dataLabels = feedsByDay.feedsByDay.map( item => item[1]);
  }

  return {
    labels: dataLabels,
    datasets: [
      {
        label: "Feeds per day",
        fill: "start",
        data: dataAmounts,
        backgroundColor: "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        pointBackgroundColor: "#ffffff",
        pointHoverBackgroundColor: "rgb(0,123,255)",
        borderWidth: 1.5,
        pointRadius: 0,
        pointHoverRadius: 3
      },
    ]
  };
};

const arrSum = arr => arr.reduce((a,b) => parseInt(a) + parseInt(b), 0);

const preparePieChartsData = (feedsBySourceDay) => {
  let dataAmounts = ['68.3', '24.2', '7.5'];
  let dataLabels = ["Desktop", "Tablet", "Mobile"];
  if(feedsBySourceDay.feedsBySourceDay.length > 0){
    dataAmounts = feedsBySourceDay.feedsBySourceDay.map( item => item[0]);
    const totalFeeds = arrSum(dataAmounts);
    dataAmounts = feedsBySourceDay.feedsBySourceDay.map( item => Number(totalFeeds/parseInt(item)).toFixed(2));
    dataLabels = feedsBySourceDay.feedsBySourceDay.map( item => item[1] + ": " + item[0]);
  }
  return {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: dataAmounts,
        backgroundColor: [
          "rgba(0,123,255,0.9)",
          "rgba(0,123,255,0.5)",
          "rgba(0,123,255,0.3)",
          "rgba(0,123,255,0.1)",
          "rgba(0,123,255,0.7)",
          "rgba(0,123,255,0.8)",
        ]
      }
    ],
    labels: dataLabels
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
