import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
   <Router>
     <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/user/:userId">
              <UserDetails/>
            </Route>
            
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
            
     </Switch>
   </Router>
   
  );
}

export default App;
