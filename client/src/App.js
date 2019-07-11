import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Actors from './Actors';
import Info from './Info';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to  Mysql Express React Node </h2>
          <ul>
            <li><Link to={'/actors'}>Actors</Link></li>
            <li><Link to={'/info'}>Info</Link></li>
          </ul>
          <hr />
          <Switch>
              <Route exact path='/actors' component={ Actors } />
              <Route path='/info' component={ Info } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;