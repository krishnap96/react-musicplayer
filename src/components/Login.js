import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class Mylogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: "",
      myfetchdata: [],
      password: ""
    };
  }

  //Fetch data and  login user
  componentDidMount() {
    axios.get('http://localhost:3001/api/user/retrieve')
      .then((res) => {
        this.setState({ myfetchdata: res.data.result });
        console.warn(this.state.myfetchdata);

      });
  }
  checkop(item, typech) {
    let valstore = item.target.value;

    switch (typech) {
      case "emailid":
        {
          this.setState({ emailid: valstore });
        }
        break;
      case "password":
        {
          this.setState({ password: valstore });
        }
        break;

    }
  }
  mysubmit() {

    const { history } = this.props;
    this.state.myfetchdata.map((key) => {

      if (key.emailid === this.state.emailid && key.password === this.state.password) {
        sessionStorage.setItem("name", key.name);

        //passing data
        alert("Valid Credentails...");

        history.push('/');
      }
      else {

        history.push('/signup');

      }

    });

  }

  render() {
    return (

      <>
        <form>
          <div class="container-signup" id="login">
            <h1>Log In</h1>
            <p>Please fill in this form to create an account.</p>
            <hr></hr>

            <label for="email"><b>Email Id</b></label>
            <input type="text" placeholder="Enter Email id" name="email"
              onChange={(item) => this.checkop(item, "emailid")}
              required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw"
              onChange={(item) => this.checkop(item, "password")}
              required></input>


            <hr></hr>

            <center><button type="button" class="btn btn-success" onClick={() => this.mysubmit()}>Login</button></center><br></br>
            <p>Already have an account? <Link class="btn btn-primary" to="/signup" >Sign Up</Link></p>

          </div>


        </form>
      </>
    );

  }
}
