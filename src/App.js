import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';


class App extends Component {
  state = {
    user:[]
  }

  handleSubmit = (userData) => {
    this.setState({user : userData})
  }


  render() {
    const {user} = this.state;
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/' exact>
              <LoginPage handleSubmit={this.handleSubmit}/>
            </Route>
            <Route path='/home' exact>
              <Home userData={user}/>
            </Route>
          </Switch>
        </Router>
      </div>  
    );
  }
  
}

export default App;
