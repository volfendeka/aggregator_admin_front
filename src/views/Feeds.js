import React, {Component} from "react";
import {Container, Row, Col, Card, CardHeader, CardBody, Form, Button} from "shards-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import PageTitle from "../components/common/PageTitle";
import {requestFeeds} from "../actions/feed";
import {connect} from "react-redux";
import {requestCountries} from "../actions/source";
import SelectOptions from "../components/common/SelectOptions";


const mapStateToProps = (state) => {
  return{
    feeds: state.requestFeeds.feeds,
    isPending: state.requestFeeds.isPending,
    error: state.requestFeeds.error,
    countries: state.requestCountries.countries,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestFeeds: (limit, country) => dispatch(requestFeeds(limit, country)),
    onRequestCountries: () => dispatch(requestCountries())
  }
};

class Feeds extends Component{

  constructor(props){
    super(props);
    this.state = {
      filterControls: {
        country: {id: props.country || ''},
        sourceType: {id: props.sourceType || ''},
        sourceName: props.sourceName || '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.props.onRequestFeeds(500);
    this.props.onRequestCountries();
  }

  handleSubmit(event) {
    event.preventDefault();
    let filterControls = this.state.filterControls;
    this.props.onRequestFeeds(500, filterControls.country);
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

  render(){
    const { feeds, countries } = this.props;
    const title = "Last 500 feeds";

    return <Container fluid className="main-content-container px-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title={title} subtitle="Feeds" className="text-sm-left" />
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md="2">
              <label htmlFor="country">Country</label>
              <SelectOptions
                id={"country"}
                options={countries}
                name="country"
                value={this.state.filterControls.country.id}
                onChange={this.handleSelectChange}
              />
            </Col>
          </Row>
          <Button id="add" type="submit" className={"form-control btn-success"}>Get feeds</Button>
        </Form>
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
