import React, { Component } from 'react';
import Home from './home/home';
import Products from './products/products';
import Stock from './stock/stock';
import Nav from './nav/home-nav';
import Footer from './footer/footer';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/stock' component={Stock}/>
          <Footer/>
        </div>
      </BrowserRouter>
      
    );
  }
}
export default App;
