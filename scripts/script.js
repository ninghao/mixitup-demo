(function() {
  "use strict";

  $('.grid').mixItUp({
    selectors: {
      target: '.column',
      sort: '.sort .button'
    },
    layout: {
      display: 'inline-block'
    }
  });

}());
