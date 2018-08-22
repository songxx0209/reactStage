
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import App from '../src/App';
import AddTodo from '../src/components/AddTodo';

describe('testing descibe', () => {
  it('hello world', () => {
    expect(1+1).toBe(2) // Pass
  });
});

describe('testing for second', () => {
  it('hello world', () => {
    expect(1+1).not.toBe(3) // Pass
  });
});

describe('Enzyme Shallow', function () {
  it('App\'s title should be Todos', function () {
    let app = shallow(<App />);
    expect(app.find('h1').text()).toEqual('Todos');
  });


  it('Add a new Todo', function () {
    let app = mount(<App/>);
    let todoLength = app.find('li').length;

    app.setState({
      list: [{
        value: 'wowo',
        id: new Date().getTime(),
      }]
    });
    // app.find('input').simulate('change');
    // addInput.props.value = 'Todo Four';
    app.find('.add-button').simulate('click');
    expect(app.find('li').length).toEqual(todoLength + 2);
  });
}); 