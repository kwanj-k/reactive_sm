import React, { Component } from 'react';
import Home from './home/home';
import Products from './products/products';
import Stock from './stock/stock';
import Nav from './nav/nav';
import Footer from './footer/footer';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <ToastContainer />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/stock' component={Stock}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
