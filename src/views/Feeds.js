import React, {Component} from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageTitle from "../components/common/PageTitle";
import {requestFeeds} from "../actions/feed";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
    isPending: state.requestFeeds.isPending,
    error: state.requestFeeds.error
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: () => dispatch(requestFeeds(500))
  }
};

class Feeds extends Component{

  componentWillMount() {
    this.props.onRequestFeeds();
  }

  render(){
    const { feeds } = this.props;
    const title = "Last 500 feeds";

    return <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title={title} subtitle="Feeds" className="text-sm-left" />
      </Row>

      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">All feeds</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <ReactTable
                data={feeds}
                columns={[
                  {
                    columns: [
                      {
                        Header: "ID",
                        accessor: "id"
                      },
                      {
                        Header: "Title",
                        accessor: "title"
                      },
                      {
                        Header: "Description",
                        accessor: "description"
                      },
                      {
                        Header: "Date Published",
                        accessor: "datePublished"
                      },
                      {
                        Header: "Media",
                        accessor: "mediaContent"
                      }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feeds);

//export default Feeds;
