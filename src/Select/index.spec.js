import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Select from './index';
import ReactSelect from 'react-select';

import Typography from '@material-ui/core/Typography';
import puppeteer from 'puppeteer';

import '@babel/polyfill';

configure({ adapter: new Adapter() });

const title = 'index.spec.js';
const wrapper = shallow(<Select title={title} />).dive();

describe('<Select />', () => {
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

describe('data fetching', async function() {
  this.timeout(10000);
  let browser, page;
  const URL = 'https://www.myscore.ru/';
  const totalCountries = 171;

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(URL);
  });

  afterEach(async () => {
    await browser.close();
  });

  it(`it should have ${totalCountries} countries`, async () => {
    await page.click('.show-more > a');
    const value = await page.evaluate(
      () =>
        document.querySelectorAll('.country-list')[2].childElementCount +
        document.querySelectorAll('.country-list')[3].childElementCount
    );

    expect(wrapper.find(ReactSelect)).to.not.equal(null);
    expect(wrapper.find(ReactSelect).prop('options').length).to.be.equal(value);
  });
});
