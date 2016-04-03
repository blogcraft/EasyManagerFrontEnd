import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    /*!
     * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
     * Code licensed under the Apache License v2.0.
     * For details, see http://www.apache.org/licenses/LICENSE-2.0.
     */

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    Ember.$(function() {
      Ember.$('body').on('click', '.page-scroll a', function(event) {
        var $anchor = Ember.$(this);
        Ember.$('html, body').stop().animate({
          scrollTop: (Ember.$($anchor.attr('href')).offset().top - 70)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
      });
    });

    // Floating label headings for the contact form
    Ember.$(function() {
      Ember.$("body").on("input propertychange", ".floating-label-form-group", function(e) {
        Ember.$(this).toggleClass("floating-label-form-group-with-value", !!Ember.$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        Ember.$(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        Ember.$(this).removeClass("floating-label-form-group-with-focus");
      });
    });

    // Highlight the top nav as scrolling occurs
    Ember.$('body').scrollspy({
      target: 'nav',
      offset: 71
    });

    // Closes the Responsive Menu on Menu Item Click
    Ember.$('.navbar-collapse ul li a').click(function() {
      Ember.$('.navbar-toggle:visible').click();
    });
  }
});
