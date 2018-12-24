import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from './index';

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount).to.have.property('callCount', 1);
  });
});
