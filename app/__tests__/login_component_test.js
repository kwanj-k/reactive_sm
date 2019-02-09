import React from 'react';
import { shallow } from 'enzyme';
import {LoginUser} from '../src/home/loginUser';
import sinon from 'sinon';

//Use array destructurig to create mock functions.
let [loginUser,] = new Array(1).fill(jest.fn());

function shallowSetup() {
  // Sample props to pass to our shallow render
  const props = {
    email: "kwanj@gmail.com",
    password: "kaykwanj",
    loginUser: loginUser
  }
  // wrapper instance around rendered output
  const enzymeWrapper = shallow(<LoginUser {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('Shallow rendered Login form', () => {
    it('should render a a login with its details', () => {
      // Setup wrapper and assign props.
      const { enzymeWrapper, props } = shallowSetup();
      // enzymeWrapper.find(selector) : Find every node in the render tree that matches the provided selector. 
      // expect(enzymeWrapper.find('input').hasClass('ui image')).toBe(true);
      expect(enzymeWrapper.find('input').text()).toBe(props.email);
      // expect(enzymeWrapper.find('button.ui.basic.red.button').text()).toBe('Delete');
      // enzymeWrapper.containsMatchingElement(node i.e reactElement) :
      // Check if the provided React element matches one element in the render tree. Returns a boolean.
      expect(enzymeWrapper.containsMatchingElement(<input>Login</input>)).toBe(true);
      

    });
  });
  const button = wrapper.find('button').first();
  button.simulate('click');

  describe('Login form', () => {
    let wrapper, props_;
    beforeEach(() => {
      // spy on the component handleOpen method
      sinon.spy(LoginUser.prototype, "handleOpen");
      const { enzymeWrapper, props } = shallowSetup();
      wrapper = enzymeWrapper;
      props_ = props;
    });
    afterEach(() => {
        LoginUser.prototype.handleOpen.restore();
    });
    it('should update the state property _**`formOpen`**_ and call handleOpen when edit button is clicked', () => {
      // find the edit button and simulate a click on it
      const button = wrapper.find('button').first();
      button.simulate('click');
      // The handleOpen method should be called.
      expect(Todo.prototype.handleOpen.calledOnce).toBe(true);
      // The value of this.state.formOpen should now be true
      expect(wrapper.state().formOpen).toEqual(true);
    });
    it('should display different buttons', () => {
      const button = wrapper.find('button').first();
      button.simulate('click');
      // When we click the edit button, the Update button should be present.
      expect(wrapper.find('button.ui').length).toBe(2);
      expect(wrapper.find('button.ui.basic.green.button').text()).toBe(' Update');
    });
    it('should display current values in edit fields', () =>{
      const button = wrapper.find('button').first();
      button.simulate('click');
      // Before any edits are made, the prepopulated values in the input fields should be the same passed through props.
      expect(wrapper.find('input').at(0).props().defaultValue).toEqual(props_.title);
    });
  });
  
