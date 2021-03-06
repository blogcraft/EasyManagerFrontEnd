import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    invalidateSession: function() {
      this.sendAction("invalidateSession"); // Exposes the action
    }
  },
  didInsertElement: function() {
    Ember.$('#side-menu').metisMenu();
    Ember.$(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            Ember.$('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            Ember.$('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) {height = 1;}
        if (height > topOffset) {
            Ember.$("#page-wrapper").css("min-height", (height) + "px");
        }
    });
    Ember.$(window).resize();

    var url = window.location;
    var element = Ember.$('ul.nav a').filter(function() {
        return this.href === url || url.href.indexOf(this.href) === 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
  }
});
