import { add } from './math.js';

(function($) {
  $('#button').click(() => {
    alert(`4 + 6 = ${add(4, 6)}`);
  });
})(window.$);

