/*! Eiguide - v0.0.1 - 2014-05-11
* https://github.com/krahman/eiguide
* Copyright (c) 2014 khal; Licensed MIT */
(function($) {

  // Collection method.
  $.fn.eiguide = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.eiguide = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.eiguide.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.eiguide.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].eiguide = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
