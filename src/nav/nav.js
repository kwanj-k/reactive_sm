import React from 'react';
import { Route,Switch} from 'react-router-dom';
import generalNav from './general-nav';
import adminNav from './admin-nav';
import homeNav from './home-nav';


const Nav = () => {
    return (
        <div className="nav-NavLinks">
            <nav>
                <Switch>
                    <Route exact path='/' component={homeNav}></Route>
                    <Route  path='/newstore' component={homeNav}></Route>
                    <Route path='/products' component={generalNav}></Route>
                    <Route path='/stock' component={adminNav}></Route>
                </Switch>
            </nav>
            
        </div>
    )
}
export default Nav;
