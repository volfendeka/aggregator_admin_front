import React from "react";
import {connect} from "react-redux";
import {
  Container,
  Button,
  Row,
  Form,
  FormInput,
  FormGroup,
  InputGroup,
} from "shards-react";
import {
  authenticate
} from "../actions/user";
import auth from "../service/auth";

const mapStateToProps = (state) => {
  return{

  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    authenticate: (data) => dispatch(authenticate(data)),
  }
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formControls:{
        username: '',
        password: '',
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formControls = this.state.formControls;

    for(let name in formControls){
      if(formControls.name === ""){
        console.log(name + 'is empty');
        return;
      }
    }

    this.props.authenticate(formControls);
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    });
  };

  render(){
    const {history} = this.props;
    if(auth.isAuth()){
      history.push("/overview");
    }
    return (
     <Container fluid className="main-content-container px-4 my-auto h-100">
       <div className="row no-gutters h-100">
         <div className="col-lg-3 col-md-5 auth-form mx-auto my-auto">
           <div className="card">
             <div className="card-body">
               <img
                 className="auth-form__logo d-table mx-auto mb-3"
                 src={require("../images/shards-dashboards-logo.svg")}
                 alt="Shards Dashboard - Register Template"
               />
               <h5 className="auth-form__title text-center mb-4">Access Your Account</h5>
               <Form onSubmit={this.handleSubmit} >
                 <FormGroup>
                   <InputGroup className="mb-3">
                     <FormInput name="username" placeholder="Enter email" aria-describedby="emailHelp" onChange={this.handleInputChange}/>
                   </InputGroup>
                 </FormGroup>
                 <FormGroup>
                   <FormInput type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
                 </FormGroup>
                 <FormGroup className="mb-3 d-table mx-auto">
                   <input className="custom-control-input" id="customCheck2"/>
                 </FormGroup>
                 <Button type="submit" className="btn btn-pill btn-accent d-table mx-auto">Access Account</Button>
               </Form>
             </div>
             <div className="card-footer border-top">
               <ul className="auth-form__social-icons d-table mx-auto">
                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                 <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                 <li><a href="#"><i className="fab fa-github"></i></a></li>
                 <li><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
               </ul>
             </div>
           </div>
           <div className="auth-form__meta d-flex mt-4">
             <a href="forgot-password">Forgot your password?</a>
             <a className="ml-auto" href="register">Create new account?</a>
           </div>
         </div>
       </div>
     </Container>
   );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
