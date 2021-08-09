import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';


export default class Myhead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempuser: ""
    };
  }


  render() {
    this.state.tempuser = sessionStorage.getItem("name");

    return (

      <div>
        <nav class="navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light">
          <ScrollLink class="navbar-brand" to="box-search" spy={true} smooth={true} offset={-1000} duration={1000}>MusicBuzz</ScrollLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li className="nav-item">
                <ScrollLink activeClass="active" to="box-search" spy={true} smooth={true} offset={-1000} duration={1000}>Home &nbsp;&nbsp;&nbsp;</ScrollLink> </li>
              <li className="nav-item ">
                <ScrollLink activeClass="active" to="album" spy={true} smooth={true} offset={-10} duration={1000} >Albums&nbsp;&nbsp;&nbsp;</ScrollLink>
              </li>

              <li className="nav-item  ">
                <Link to="/login" >Login </Link>
              </li>

            </ul>
            <form class="form-inline my-2 my-lg-0">

              <li className="nav-item  inactive">
                <p>Welcome ,{this.state.tempuser}</p>

              </li>



            </form>


          </div>
        </nav>

      </div>

    );
  }


}
