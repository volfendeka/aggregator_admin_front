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
    let value =    this.props.value || '';
    let onChange =    this.props.onChange || function(){};
    let select =
    <FormSelect id={id} name={name} onChange={onChange} value={value}>
      <option>Choose</option>
      {options.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
    </FormSelect>
    return select
  }
}
export default SelectOptions;
