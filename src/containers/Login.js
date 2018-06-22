import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import Axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
       username: "",
      password: "",
      entity:{},
    };
  }
  componentDidMount(){
      // this.setState({isLoading:true});
      // Axios.post('http://localhost:8080/kedbloginapi/user/login',this.state)
      // .then(res=>{
      //   console.log(res.data);
      //   this.setState({entity:res.data})
      // });
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async  event => {
    event.preventDefault();
    try {
        //await Auth.signIn(this.state.email, this.state.password);
        this.setState({isLoading:true});
        console.log(this.state.username + "----"+this.state.password)
        Axios.post('http://localhost:8080/kedbloginapi/user/login',{username:this.state.username,password:this.state.password})
        .then(res=>{
          console.log("Before Setting state"+res.data[0].engagements);
          this.setState({entity:res.data})
          console.log("Entity after setting state"+this.state.entity)
        })
    
        if(this.state.entity){
        this.props.userHasAuthenticated(true);}

        (this.state.entity)?
        this.props.history.push("/") : this.props.history.push("/login")
      } catch (e) {
        alert(e.message);
      }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>User Name</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}