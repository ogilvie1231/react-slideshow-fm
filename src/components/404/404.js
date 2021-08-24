import React, { Component } from "react";
import "./404.css";

class Lost extends Component {
  render() {
    var pathSegmentsToKeep = 1;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
    return (
        
      <div>
        <header>{/* <Navbar /> */}</header>
        <body>
          <div>
            <div>
                <h2>ERROR BITCH</h2>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Lost;
