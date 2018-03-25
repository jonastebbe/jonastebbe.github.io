// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Blazy from 'blazy';
import Barba from 'barba.js';

$(() => {
  // Activate Link modules logic
  new Link();

  // Lazy image loading
  var bLazy = new Blazy({
    success: function(ele){
      var img = $(ele);
      if (img.height() >= img.width()) {
        $(ele).parent().addClass('photo-stream__photo--portrait');
      }  
    }
  });
  bLazy.revalidate();

  // Barba custom transition
  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise
        .all([this.newContainerLoading, this.fadeOut()])
        .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
      return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
      var _this = this;
      var $el = $(this.newContainer);

      $(this.oldContainer).hide();

      $el.css({
        visibility : 'visible',
        opacity : 0
      });

      $el.animate({ opacity: 1 }, 400, function() {
        _this.done();
        bLazy.revalidate();
      });
    }
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };

  // AJAX page transitions
  Barba.Pjax.start();

  // Resize portrait photos
  $('.photo-stream__photo').each((i, obj) => {
    var img = $(obj).find('img');
    if (img.height() >= img.width()) {
      $(obj).addClass('photo-stream__photo--portrait');
    }
  });

});
