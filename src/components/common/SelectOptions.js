import React, {Component} from "react";
import {
  FormSelect
} from "shards-react";

//options should have name and id
class SelectOptions extends Component{
  render(){
    let options = this.props.options || [];
    let id =    this.props.id || 0;
    let name =    this.props.name || '';
    let onChange =    this.props.onChange || function(){};
    let select =
    <FormSelect id={id} name={name} onChange={onChange}>
      <option>Choose</option>
      {options.map(value => <option key={value.id} value={value.id}>{value.name}</option>)}
    </FormSelect>
    return select
  }
}
export default SelectOptions;
