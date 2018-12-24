import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import App from './index';
import Select from '../Select';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders the title', () => {
    expect(wrapper.find('h1')).to.have.lengthOf(1);
  });

  it('renders the p tags', () => {
    expect(wrapper.find('p')).to.have.lengthOf(2);
  });

  it('renders Select components', () => {
    expect(wrapper.find(Select)).to.have.lengthOf(2);
  });
});
