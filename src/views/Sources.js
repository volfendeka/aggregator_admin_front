import React, {Component} from "react";
import {Container, Row, Col, Card, CardHeader, CardBody, Form, Button} from "shards-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageTitle from "../components/common/PageTitle";
import {requestSources, updateSource} from "../actions";
import {connect} from "react-redux";
import SourceForm from "../containers/SourceForm";
import UpdateSourceModal from "../containers/UpdateSourceModal";



const mapStateToProps = (state) => {
  return{
    sources: state.requestSources.sources,
    countries: state.requestCountries.countries,
    isPending: state.requestSources.isPending,
    error: state.requestSources.error
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestSources: () => dispatch(requestSources())
  }
};

class Sources extends Component{

  handleEdit = (row) => {
    //todo: modal editable form or render editable form instead of row
    console.log('not implemented');
  };

  render(){
    const { sources } = this.props;

    return <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="All sources" subtitle="Sources" className="text-sm-left" />
      </Row>

        <Card small>
          <SourceForm action="create"/>
        </Card>
      <Card small>
          <UpdateSourceModal/>
      </Card>

      <Row>
        <Col>
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">All sources</h6>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <ReactTable
                data={sources}
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
                        Header: "Base uri",
                        accessor: "baseUri",

                      },
                      {
                        Header: "Rss uri",
                        accessor: "rssUri",
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
                      {
                        Header: '',
                        Cell: row => (
                          <Button id="add" className={"form-control"} onClick={() => this.handleEdit(row)}>Edit</Button>
                        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
