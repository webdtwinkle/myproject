import React, { Component } from "react";
// import { signup } from "../endpoints";
import {Link} from 'react-router-dom'
// import { useNavigate } from "react-router-dom";


export default class Signup extends Component {
  
  constructor() {
    super();
    this.state = {
      signupError: "",
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      
    };
  }
  // let navigate = useNavigate();
  // const routeChange = () => {
  //   let path = "/";
  //   navigate(path);
  // };

  signup = async(event) => {
    event.preventDefault();
    let stateForm = { ...this.state };

    delete stateForm["signupError"];
    const res = await fetch("/reg-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stateForm           // we are passig in it ..backend
       
      ),
    });
  //  let navigate =useNavigate();
 
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
    window.location.href = '/login';     // redirect to login page
   }
    // fetch("/reg-user", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(stateForm),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status.status === "unsuccessful") {
    //       this.setState({ signupError: data.status.message });
    //       return;
    //     }
    //     this.props.history.push("/");
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  setFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  setLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  setConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  render() {
    return (
      <div className="meenu">
      <div className="form-container">
        <h1 className="form-title">User Registration Form</h1>
        <p className="error">{this.state.signupError}</p>

        <form
          action=""
          method="post"
          name="signup"
          encType="application/x-www-form-urlencoded"
          onSubmit={this.signup}
        >
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={this.setFirstName}
            value={this.state.firstName}
          />
          <br />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={this.setLastName}
            value={this.state.lastName}
          />
          <br />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            onChange={this.setEmail}
            value={this.state.email}
          />
          <br />

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            onChange={this.setUsername}
            value={this.state.username}
          />
          <br />
          

          <label htmlFor="password">
            <b>
              Password: **atleast 1 cap, 1 number, 1 special symbol, total 8
              letter
            </b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={this.setPassword}
            value={this.state.password}
          />
          <br />

          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
            onChange={this.setConfirmPassword}
            value={this.state.confirmPassword}
          />
          <br />
          <input type="submit" className="signupbtn" value="Sign Up" />
          <hr />
          <p>
            Already have an account?
            <Link to="/login">Sign in</Link>.
          </p>
        </form>
        {/* <WatchTrainee sendId={sendId} sendName={sendName} /> */}

      </div>
      </div>
    );
  }
}
