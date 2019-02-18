import React from "react";
import Enzyme, { mount,shallow, render} from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

import Login from '../../../components/auth/Login';

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Login', () => {
    // it('should render correctly', () => {
    //   const component = shallow(<Login  />);
  
    //   expect(component).toMatchSnapshot();
    // });
    
});
