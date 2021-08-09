import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (


      <footer class="page-footer font-small special-color-dark pt-4">
        <div class="container3">
          <ul class="list-unstyled list-inline text-center">
            <li class="list-inline-item">
              <a class="btn-floating btn-fb mx-1">
                <a class="fa fa-facebook" href="http://fb.com"> </a>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-tw mx-1">
                <a class="fa fa-twitter" href="http://twitter.com"> </a>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-gplus mx-1">
                <a class="fa fa-google-plus" href="http://google.com"> </a>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn-floating btn-li mx-1">
                <a class="fa fa-linkedin" href="http://linkedin.com"> </a>
              </a>
            </li>

          </ul>
        </div>
        <div class="footer-copyright text-center py-3">© 2019 Copyright:
                <a href="localhost:3000"> MusicBuzz.com</a>
        </div>
      </footer>


    );
  }
}