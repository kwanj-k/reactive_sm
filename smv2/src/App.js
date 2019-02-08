import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';


import Home from './components/common/HomePage'
import About from './components/common/AboutPage'
import ErrorPage from './components/common/404Page'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp';

const App = (props) => {
  return (
    <div >
          <BrowserRouter >
            <Switch >
                <Route exact path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/signup" component={SignUp}></Route>
                <Route component={ErrorPage}></Route>
            </Switch>
          </BrowserRouter>

    </div>
  );
};

export default App
