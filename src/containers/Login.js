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
      entity:[],
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
        Axios.post('http://10.76.17.138:8080/kedbloginapi/user/login',{username:this.state.username,password:this.state.password})
        .then(res=>{

          let engagementsData = [];
          engagementsData = res.data;
          // console.log("Before Setting state Stringy :"+res.data[0].tower);
          // console.log("Before Setting state :"+engagementsData);
          // let engData = JSON.parse(engagementsData);
          // console.log("Before Setting state engdata :"+engData[0].tower);

          this.setState({entity:engagementsData})
          console.log("Entity after setting state :"+this.state.entity);
          if(this.state.entity){
            this.props.userHasAuthenticated(true);}

            // for (let i in this.state.entity){
            //       console.log(this.state.entity[i].tower); 
            //   }

        const queryParam = [];
        for (let i in this.state.entity){
            queryParam.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.entity[i].tower));  
        }
        
        // queryParam.push('price=' + this.state.totalPrice)

        const queryString = queryParam.join('&');
        // this.props.history.push({
        //     pathname: '/checkout',
        //     search: '?' +queryString});

    
            (this.state.entity)?
            this.props.history.push({pathname:"/",search:'?' +queryString}) : this.props.history.push("/login")
        })
  
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