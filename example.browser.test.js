import {
  describe,
  expect,
} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

import { Trend } from 'k6/metrics';
import { chromium } from 'k6/experimental/browser';
import step from './js_modules/steps.js';

const trend = new Trend('___login_example', true);

export default async function () {
  describe('Example Browser test @performance @browser @example @login', async () => {
    const browser = chromium.launch({
      headless: true,
      timeout: 120000,
    });
    const page = browser.newPage();

    try {
      trend.add(
        await step(async () => {
          await page.goto('https://test.k6.io/my_messages.php', {
            waitUntil: 'networkidle',
          });

          page.locator('input[name="login"]').type('admin');
          page.locator('input[name="password"]').type('123');

          const submitButton = page.locator('input[type="submit"]');

          await Promise.all([page.waitForNavigation(), submitButton.click()]);

          expect(page.locator('h2').textContent(), 'title').to.equal(
            'Welcome, admin!'
          );
        })
      );
    } finally {
      page.close();
      browser.close();
    }
  });
}
