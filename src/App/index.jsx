import React, { useEffect } from 'react';

import Results from '../Results';
import Select from '../Select';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

// import puppeteer from 'puppeteer';

export default function App() {
  // const URL = 'https://www.myscore.ru/';
  // let browser, page;

  // useEffect(async () => {
  //   browser = await puppeteer.launch();
  //   page = await browser.newPage();
  //   await page.goto(URL);

  //   await page.click('.show-more > a');

  //   const value = await page.evaluate(
  //     () =>
  //       document.querySelectorAll('.country-list')[2].childElementCount +
  //       document.querySelectorAll('.country-list')[3].childElementCount
  //   );
  //   console.log(value);

  //   await browser.close();
  // });

  return (
    <>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Сбор статистики
      </Typography>
      <Select title="Выберите страну" />
      <Select title="Выберите лигу" />
      <Results />
    </>
  );
}
