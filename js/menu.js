/*
 * Off canvas mobile menu
 * http://github.com/offcanvasmobilemenu
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2015 Ivano Malavolta
 * Released under the MIT license
 * http://ivanomalavolta.com
 *
 * Date: 2015-08-13
 */

 // menuOpeningElement: the DOM node that will trigger the event for opening the menu
 // menuOpeningEvent: the event that triggers the opening of the menu
 // menuClosingManager: the function that will manage the closing of the menu
 // menuClosingEvent: the type of event that will trigger the closing of the menu
var Menu = function(menuOpeningElement, menuOpeningEvent, menuClosingManager, menuClosingEvent) {
  this.perspectiveWrapper = document.getElementById('perspective');

  var self = this;

  this.openMenu = function(e) {
      if (!self.perspectiveWrapper.classList.contains('modalview')) {
        self.perspectiveWrapper.classList.add('modalview');
        setTimeout(function() {
          self.perspectiveWrapper.classList.add('animate');
        }, 0);
      }
    };

    this.closeMenu = function(e) {
      if (self.perspectiveWrapper.classList.contains('animate')) {

        menuClosingManager(e.target.id);

        self.perspectiveWrapper.classList.remove('animate');
        setTimeout(function() {
          self.perspectiveWrapper.classList.remove('modalview');
        }, 333);
      }
    };

    // In the following we add the
    menuOpeningElement.addEventListener(menuOpeningEvent, this.openMenu, false);
    document.getElementById('perspective').addEventListener(menuClosingEvent, this.closeMenu, false);
};
