import $ from 'jquery';
import { DOMParser } from 'happy-dom'
import { vi } from 'vitest'

const parser = new DOMParser();

/**
 * Note: this will need to be maintained or overridden on a test by test basis (ick!)
 */
const doc = parser.parseFromString(`
  <html>
  <body>
    <button id="button">Click Me</button>
  </body>
  </html>`, 'text/html');

  window.document.body.innerHTML = doc.body.innerHTML;

  /*
   * window.alert does not exist in this test environment so we create a mock we can observe
   */
  window.alert = vi.fn().mockImplementation((...args) => console.log('<MOCK_ALERT>', ...args));

/*
 * Use this file to mock or any elements that would be defined on the global object
 */
globalThis.$ = $;