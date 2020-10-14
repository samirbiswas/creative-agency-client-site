import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Customar from './components/Customar/Customar';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext()

function App() {
  const [loggesinUser, setLoggedInUser] = useState({})
  return (
    
    <UserContext.Provider value={[loggesinUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <PrivateRoute  path='/customar/:title'>
            <Customar></Customar>
          </PrivateRoute>

        </Switch>
      </Router>

        </UserContext.Provider>
  );
}

export default App;
