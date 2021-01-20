
import React, { Component } from 'react';
import Login from './Login';
import Home  from './home';
import { Route,Switch } from 'react-router-dom';
 

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Switch>

          <Route path='/'component={Home} exact ></Route>
      
       <Route path='/login'component={Login}></Route>


      </Switch>

      
      
     );
  }
}
 
export default App;

