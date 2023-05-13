import {
  describe,
  expect,
} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

import { Trend } from 'k6/metrics';
import getResponseTime from './js_modules/response-time.js';
import http from 'k6/http';

const trend = new Trend('___response_time', true);

export default function () {
  describe('Example API test @performance @api @example @get-request', () => {
    const response = http.get('https://test.k6.io');
    trend.add(getResponseTime(response));
    expect(response.status, 'response status').to.equal(200);
  });
}
