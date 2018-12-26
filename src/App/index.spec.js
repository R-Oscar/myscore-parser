import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import App from './index';
import Results from '../Results';
import Select from '../Select';
import Adapter from 'enzyme-adapter-react-16';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('renders the Typography (header)!', () => {
    expect(wrapper.find(Typography)).to.have.lengthOf(1);
  });

  it('renders Select components!', () => {
    expect(wrapper.find(Select)).to.have.lengthOf(2);
  });

  it('should render Results compo', () => {
    expect(wrapper.find(Results)).to.have.lengthOf(1);
  });

  it('should include CssBaseline', () => {
    expect(wrapper.find(CssBaseline)).to.have.lengthOf(1);
  });
});
