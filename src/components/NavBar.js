import React, { Component } from "react";
import {Link} from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="uk-navbar-container" uk-navbar="true">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <Link to="/"> <h3 style={{margin:'0'}}>REDDID</h3></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
