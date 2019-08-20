import React, {Component} from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup
} from "shards-react";

class NewSourceForm extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      countries: false,
      statuses: false
    };
  }

  toggle(which) {
    const newState = { ...this.state };
    newState[which] = !this.state[which];
    this.setState(newState);
  }

  render(){
    const form =
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                <Col md="2" className="form-group">
                  <label htmlFor="sourceName">Name</label>
                  <FormInput
                    id="sourceName"
                    placeholder="Name"
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="baseUri">Base uri</label>
                  <FormInput
                    id="baseUri"
                    placeholder="baseUri"
                  />
                </Col>
                <Col md="2">
                  <label htmlFor="rssUri">Rss uri</label>
                  <FormInput id="rssUri" />
                </Col>
                <Col md="2">
                  <label htmlFor="sourceType">Type</label>
                  <FormSelect id="sourceType">
                    <option>Choose...</option>
                    <option>test 1</option>
                    <option>other</option>
                  </FormSelect>
                </Col>
                <Col md="2">
                  <label htmlFor="country">Country</label>
                  <FormSelect id="sourceType">
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
                <Col md="2">
                  <label htmlFor="status">Status</label>
                  <FormSelect id="status" >
                    <option>Choose...</option>
                    <option>...</option>
                  </FormSelect>
                </Col>
              </Row>
              <Button id="add" type="submit" className={"form-control"}>Add</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>

    return form;
  }
}


export default NewSourceForm;
