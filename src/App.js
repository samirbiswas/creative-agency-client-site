import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AddOrderList from './components/Dashboard/AddOrderList/AddOrderList';
import Admin from './components/Dashboard/Admin/Admin';
import Dashboard from './components/Dashboard/Dashboard';
import Review from './components/Dashboard/Review/Review';
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

          <PrivateRoute  path='/customar/:id'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/order">
           <AddOrderList></AddOrderList>
          </Route>
          <Route path="/review">
           <Review></Review>
          </Route>
          <Route path="/addAdmin">
           <Admin></Admin>
          </Route>

        </Switch>
      </Router>

        </UserContext.Provider>
  );
}

export default App;
