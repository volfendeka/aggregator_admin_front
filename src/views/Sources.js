import React, {Component} from "react";
import {Container, Row, Col, Card, CardHeader, CardBody, Form} from "shards-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageTitle from "../components/common/PageTitle";
import {requestSources, updateSource} from "../actions";
import {connect} from "react-redux";
import NewSourceForm from "../containers/NewSourceForm";



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

  renderEditable = cellInfo => {
    const cellValue = this.props.sources[cellInfo.index][cellInfo.column.id];

    return (
      <input
        placeholder="type here"
        name="input"
        type="text"
        onChange={this.handleInputChange.bind(null, cellInfo)}
        value={cellValue}
      />
    );
  };

  handleInputChange = (cellInfo, event) => {
    let data = [...this.props.sources];
    data[cellInfo.index][cellInfo.column.id] = event.target.value;

    this.setState({ data });
  };

  handleSave = (row) => {
    updateSource(row.original);
  };
  handleDelete = (row) =>{

  };

  render(){
    const { sources } = this.props;

    console.log(this.props.countries)

    return <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="All sources" subtitle="Sources" className="text-sm-left" />
      </Row>


        <Card small>
          <NewSourceForm />
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
                        Cell: this.renderEditable
                      },
                      {
                        Header: "Base uri",
                        accessor: "baseUri",
                        Cell: this.renderEditable

                      },
                      {
                        Header: "Rss uri",
                        accessor: "rssUri",
                        Cell: this.renderEditable
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
                          <div>
                            <button className={"btn btn-success"} onClick={() => this.handleSave(row)}>Save</button>
                            <button className={"btn btn-danger"} onClick={() => this.handleDelete(row)}>Delete</button>
                          </div>
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
