import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './index';
import ReactSelect from 'react-select';

import Typography from '@material-ui/core/Typography';

configure({ adapter: new Adapter() });

describe('<Select />', () => {
  const title = 'index.spec.js';
  const wrapper = shallow(<Select title={title} />).dive();

  it('should render a Typography', () => {
    const text = wrapper
      .find(Typography)
      .children()
      .text();
    expect(text).to.equal(title);
  });

  it('should render a ReactSelect', () => {
    expect(wrapper.find(ReactSelect)).to.have.lengthOf(1);
  });
});
