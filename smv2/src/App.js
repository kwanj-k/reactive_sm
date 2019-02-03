import React  from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './components/common/HomePage'
import About from './components/common/AboutPage'

const App = (props) => {
  return (
    <div >
      <BrowserRouter >
        <Switch >
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
        </Switch>
    
    </BrowserRouter>
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App
