import puppeteer from 'puppeteer';
import server from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  const baseUrl = 'http://localhost:8888';

  let browser = null;
  let page = null;

  beforeAll(async () => {
    await server.start(); // запуск сервера

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 50, // скорость
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close(); // закрытие браузера
    await server.stop(); // остановка сервера
  });

  test('test Credit Card', async () => {
    await page.goto(baseUrl); // переход на страницу

    const form = await page.$('[data-id=validator-form]');

    const input = await form.$('[data-id=validator-card]');
    await input.type('4024007143634649');

    const submit = await form.$('[data-id=validate-btn]');
    await submit.click();

    const label = await form.$('[data-id=validator-label]');
    const labelHandle = await label.getProperty('innerHTML');
    const labelValue = await labelHandle.jsonValue();

    expect(labelValue).toEqual('Visa');
  });
});
