import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './form.css';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
    
      username: "",
      password: "",
     
    };
  }
  // };
  signup = async(event) => {
    event.preventDefault();
    let stateForm = { ...this.state };

    delete stateForm["signupError"];
    const res = await fetch("/reg-loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stateForm           // we are passig in it ..backend
       
      ),
    });
    const data = await res.json();
    console.log(data);
    if(data.error){
      window.alert(data.error);
      this.setState({ signupError: data.status.message });
          return;
    }
   else  {
    window.alert("user reg successfuly");
    // this.props.history.push("/");
    // navigate("/");
    window.location.href = '/PricingTable';     // after login page redirect to pricing
   }
  };
  
  
  
  setUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div className="meenu">
      <div className="form-container">
        <h1 className="form-title">User Login Form</h1>
        <p className="error">{this.props.error}</p>
        <form
          action=""
          method="post"
          name="login"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.signup}
        >
          <label htmlFor="username">Email</label>
          <input
            type="text"
            name="username"
            onChange={this.setUsername}
            value={this.state.username}
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            onChange={this.setPassword}
            value={this.state.password}
          />
          <br />
          <input type="submit" className="loginbtn" value="Login" />
          <hr />
          <p>
            don't have an account?
            <Link to="/signup">SignUp Here</Link>.
          </p>
        </form>
      </div>
      </div>
    );
  }
}
