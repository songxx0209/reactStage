
import React from 'react';
// import Enzyme from 'enzyme';
import {shallow, mount, render} from 'enzyme';


// import Adapter from 'enzyme-adapter-react-16';
 
// Enzyme.configure({ adapter: new Adapter() });

import App from '../src/App';

// describe.skip('testing descibe', () => {
//   test('hello world', () => {
//     expect(1+1).toBe(2) // Pass
//   });
// });

// describe('testing for second', () => {
//   test('hello world', () => {
//     expect(1+1).not.toBe(3) // Pass
//   });
// });

describe('Enzyme Shallow', function () {
  test('App\'s title should be Todos', function () {
    let app = shallow(<App />);
    expect(app.find('h1').text()).toEqual('Todos');

    // const renderer = shallow(<div>hello world</div>);
    // expect(renderer.text()).toEqual('hello world');
  });
});