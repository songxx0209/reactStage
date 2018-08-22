import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';


// 快照测试
describe('<App /> ', () => {
  it('Snapshot', () => {
    const component = renderer.create(<App/>);
    let snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

