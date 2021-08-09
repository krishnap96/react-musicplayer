import React, { Component } from 'react';
import axios from 'axios';


export default class Mysignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailid: "",
      password: "",
      tempuser: "",

    };
  }


  mySubmit() {
    let obj = {}
    obj.name = this.state.name;
    obj.emailid = this.state.emailid;
    obj.password = this.state.password;
    const { history } = this.props;
    if (this.state.name === "" && this.state.emailid === "" && this.state.password === "") {
      alert("Error! You have ckicked the submit button without filling the form..")
    }

    else {
      console.warn("here is value is :", obj);

      const { name, emailid, password } = this.state;

      axios.post('http://localhost:3001/api/user/create', { name, emailid, password })
        .then((result) => {
          alert("Successfully Recorded..");
          alert("Now you are eligible for login process..");
          history.push('/login')
        }).catch(error => {
          console.log("error");
        })
    }
  }

  checkop(item, typech) {
    let valstore = item.target.value;
    switch (typech) {
      case "name":
        {
          this.setState({ name: valstore });
        }
      case "emailid":
        {
          this.setState({ emailid: valstore });
        }
      case "password":
        {

          this.setState({ password: valstore });
        }
    }
  }

  render() {

    return (

      <form>
        <div class="container-signup">
          <h1>Register </h1>
          <p>Please fill in this form to create an account.</p>
          <hr></hr>

          <label for="namei"><b> Name</b></label>
          <input type="text" placeholder="Enter Name" name="namei" onChange={(item) => this.checkop(item, "name")} required></input>


          <label for="emailid"><b>Email Id</b></label>
          <input type="text" placeholder="Enter Email id" name="emailid" onChange={(item) => this.checkop(item, "emailid")}
            required></input>

          <label for="pswd"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="pswd" onChange={(item) => this.checkop(item, "password")}
            required></input>


          <hr></hr>

          <center><button type="button" class="btn btn-success" onClick={() => this.mySubmit()} required>Register</button></center><br></br>

        </div>
      </form>




    );
  }
}