import React, {Component} from "react";
import {Container, Row, Col, Card, CardHeader, CardBody, Button, Modal} from "shards-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageTitle from "../components/common/PageTitle";
import {requestCountries, requestSources} from "../actions/source";
import {connect} from "react-redux";
import SourceForm from "../containers/SourceForm";



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
    onRequestSources: () => dispatch(requestSources()),
    onRequestCountries: () => dispatch(requestCountries()),
  }
};

class Sources extends Component{

  state = {
    show: false,
    sourceId: '',
    name: '',
    rssUri: '',
    baseUri: '',
    country: {id: ''},
    sourceType: {id: ''},
    sourceStatus: {id: ''},
  };

  componentWillMount() {
    this.props.onRequestSources();
    this.props.onRequestCountries();
  }

  showModal = (row) => {
    let { id, name, baseUri, rssUri, country, sourceType, sourceStatus} = row.original;
    this.setState({
      show: true,
      name: name,
      baseUri: baseUri,
      rssUri: rssUri,
      country: country.id,
      sourceStatus: sourceStatus.id,
      sourceType: sourceType.id,
      sourceId: id
    });
  };


  hideModal = () => {
    console.log(this.state);
    this.setState({ show: false });
  };

  render(){
    const { sources } = this.props;
    let title = "All sources: ";
    title += sources ? sources.length : '';

    return <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title={title} subtitle="Sources" className="text-sm-left" />
      </Row>

        <Card small>
          <SourceForm action="create"/>
        </Card>

        <Modal open={this.state.show} toggle={this.hideModal} className="modal-dialog-centered modal-lg">
              <div className="modal-header">
                <h5 className="modal-title" id="editSourceModal">Edit source</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.hideModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <SourceForm name={this.state.name} rssUri={this.state.rssUri}
                            baseUri={this.state.baseUri} country={this.state.country}
                            sourceType={this.state.sourceType} sourceStatus={this.state.sourceStatus}
                            sourceId = {this.state.sourceId}
                            action="update"/>
              </div>
              <div className="modal-footer">
              </div>
        </Modal>

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
                          <Button id="add"  className="form-control" data-toggle="modal" data-target="#exampleModal" onClick = {() =>this.showModal(row) }>Edit</Button>
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
