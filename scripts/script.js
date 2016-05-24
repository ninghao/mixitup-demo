(function() {
  "use strict";

  $('.grid').mixItUp({
    selectors: {
      target: '.column',
      sort: '.sort .button',
      filter: '.filter .button'
    },
    layout: {
      display: 'inline-block'
    }
  });

}());
