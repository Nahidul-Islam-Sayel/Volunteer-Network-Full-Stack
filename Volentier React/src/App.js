import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import Nev from './Componant/Manu/Nev';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componant/Home/Home';
import Profile from './Componant/Profile/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Componant/Login/Login';
import Reg from './Componant/Reg/Reg';
import Details from './Componant/Details/Details';
import Thanks from './Componant/Thanks/Thanks';
import Admin from './Componant/Admin/Admin';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const[Type,setType]=useState({});
  const[Name,setName]=useState({});
  const[Email,setEmail]=useState({});
  const[Date,setDate]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser , Type , setType , Name , setName , Email , setEmail , Date,setDate]}>
    <Router>
      <Switch>
      <Route path="/Admin">
      <Nev/>
      <Admin/>
        </Route>
      <Route path="/Added">
      <Nev/>
      <Thanks/>
        </Route>
      <Route path="/Profile">
      <Profile/>
        </Route>
        <Route path="/login">
        <Nev/>
          <Login/>
        </Route>
        <Route path="/dea">
       <Details/>
        </Route>
      <PrivateRoute path="/reg">
          <Reg/>
          <Profile/>
        </PrivateRoute>
      <Route path="/">
      <Nev/>
            <Home />
            
          </Route>
     

     </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
