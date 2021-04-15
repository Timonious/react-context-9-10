import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import TopNav from "./component/Topnav";
import Inlog from "./pages/inlog/Inlog";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

function App() {
  return (
<>
  <TopNav/>
  <Switch>
    <Route exact path='/'>
      <Home/>
    </Route>
    <Route  path='/login'>
      <Inlog/>
    </Route>
    <Route  path='/profile'>
     <Profile/>
    </Route>
    <Route  path='/register'>
      <Register/>
    </Route>
  </Switch>
</>
  );
}

export default App;
