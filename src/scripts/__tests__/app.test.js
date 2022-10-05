import { expect, it } from 'vitest'
import '../app.js'

it('should call window.alert when clicking the button', () => {
  document.getElementById('button').click();

  // window.alert is a mock function so it can be observed in this way
  expect(window.alert).toBeCalled();
})