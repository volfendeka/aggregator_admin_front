import React, {Component} from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button,
} from "shards-react";
import SelectOptions from "../components/common/SelectOptions";
import {connect} from "react-redux";
import {requestCountries, requestSourceTypes, requestSourceStatuses, createSource, updateSource} from "../actions/source";

const mapStateToProps = (state) => {
  return{
    countries: state.requestCountries.countries,
    sourceStatuses: state.requestSourceStatuses.sourceStatuses,
    sourceTypes: state.requestSourceTypes.sourceTypes,
    isPending: state.requestCountries.isPending,
    error: state.requestCountries.error
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRequestCountries: () => dispatch(requestCountries()),
    onRequestSourceTypes: () => dispatch(requestSourceTypes()),
    onRequestSourceStatuses: () => dispatch(requestSourceStatuses()),
    createSource: (data) => dispatch(createSource(data)),
    updateSource: (data, sourceId) => dispatch(updateSource(data, sourceId)),
  }
};

class SourceForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      formControls:{
        name: props.name || '',
        rssUri: props.rssUri || '',
        baseUri: props.baseUri || '',
        country: {id: props.country || ''},
        sourceType: {id: props.sourceType || ''},
        sourceStatus: {id: props.sourceStatus || ''},
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    this.props.onRequestSourceTypes();
    this.props.onRequestSourceStatuses();
  };

  handleSubmit(event) {
    event.preventDefault();
    const {action, sourceId} = this.props;
    let formControls = this.state.formControls;

    for(let name in formControls){
      if(formControls.name === ""){
        console.log(name + 'is empty');
        return;
      }
    }

    switch (action) {
      case 'create':
        this.props.createSource(formControls);
        break;
      case 'update':
        this.props.updateSource(formControls, sourceId);
        break;
    }
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(event.target.value)

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    });
  };
  handleSelectChange = event => {
    const name = event.target.name;
    const id = parseInt(event.target.value, 10);

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          id
        }
      }
    });
  };

  render(){
    const {countries, sourceTypes, sourceStatuses} = this.props;
    let { action } = this.props;
    action = ''// action.charAt(0).toUpperCase() + action.substring(1);

    return (
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Row form>
                <Col md="2" className="form-group">
                  <label htmlFor="sourceName">Name</label>
                  <FormInput
                    id="sourceName"
                    placeholder="Name"
                    name="name"
                    value={this.state.formControls.name}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="baseUri">Base uri</label>
                  <FormInput
                    id="baseUri"
                    placeholder="baseUri"
                    name="baseUri"
                    value={this.state.formControls.baseUri}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="rssUri">Rss uri</label>
                  <FormInput
                    id="rssUri"
                    name="rssUri"
                    value={this.state.formControls.rssUri}
                    onChange={this.handleInputChange}
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="country">Country</label>
                  <SelectOptions
                    id={"country"}
                    options={countries}
                    name="country"
                    value={this.state.formControls.country.id}
                    onChange={this.handleSelectChange}
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="sourceType">Type</label>
                  <SelectOptions
                    id={"sourceType"}
                    options={sourceTypes}
                    name="sourceType"
                    value={this.state.formControls.sourceType.id}
                    onChange={this.handleSelectChange}
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="sourceStatus">Status</label>
                  <SelectOptions
                    id={"sourceStatus"}
                    options={sourceStatuses}
                    name="sourceStatus"
                    value={this.state.formControls.sourceStatus.id}
                    onChange={this.handleSelectChange}
                  />
                </Col>
              </Row>
              <Button id="add" type="submit" className={"form-control btn-success"}>{action}</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SourceForm);
