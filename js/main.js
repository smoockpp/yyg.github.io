console.log("Running");

$(document).delegate('.open', 'click', function(event){
            $(this).addClass('oppenned');
            event.stopPropagation();
        })
        $(document).delegate('body', 'click', function(event) {
            $('.open').removeClass('oppenned');
        })
        $(document).delegate('.cls', 'click', function(event){
            $('.open').removeClass('oppenned');
            event.stopPropagation();
        });

// $('#menu').slicknav({
// 	label: '',
// 	duration: 1000,
//   easingOpen: "easeOutBounce", //available with jQuery UI
//   prependTo:'.navbar'
// });

$('.navbar').sticky({topSpacing: 0});

$('.navbar').on('sticky-start', function() {

});


// Menubar
var menuBarUI = {
  closed: $('.closed'),
  menu: $('.menu'),
  dashOne: $('.dash1'),
  dashTwo: $('.dash2'),
  dashThree: $('.dash3'),
  openCloseBool: true,
  openClose: function() {
    if (this.openCloseBool == false) {
      this.closed.addClass('opened');
      this.toggleMenuOn();
    } else {
      this.closed.removeClass('opened');
      this.toggleMenuOff();
    }
  },
  toggleMenuOn: function() {
    this.menu.slideDown('slow');
    this.menu.css({ 'display': 'flex',
                    'display': '-webkit-box',
                    'display': '-moz-box',
                    'display': '-ms-flexbox',
                    'display': '-webkit-flex',
                    'display': 'flex'});
  },
  toggleMenuOff: function() {
    this.menu.slideUp('slow');
  }
}

menuBarUI.closed.click(function() {
  menuBarUI.openCloseBool = !menuBarUI.openCloseBool;
  menuBarUI.openClose();
});



// slider

$('.header-slides').slick({
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  dots: true
});

// $(function() {
//   var header = $('header');
//   var backgrounds = ['url("../images/background3.jpg")', 'url("../images/background2.jpg")', 'url("../images/background.jpg")'];
//   var heroTitle = $('.hero-title');
//   var titles = ['your delivery specialist', 'are you looking for job?', 'our clients are happy'];
//   var texts = ['We are fast growing experts in delivery services from A to Z! Some other text goes here.', 'We are fast growing experts in delivery services from A to Z! Some other text goes here.', 'We are fast growing experts in delivery services from A to Z! Some other text goes here.'];
//   var heroText = $('.hero-text');
//   var current1 = 0;
//   var current2 = 0;
//   var current3 = 0;
//
//   function nextBackground() {
//     heroTitle.html(titles[current1 = ++current1 % titles.length]);
//     heroText.html(texts[current2 = ++current2 % texts.length]);
//     header.css(
//      'background',
//       backgrounds[current3 = ++current3 % backgrounds.length]
//    );
//
//    setTimeout(nextBackground, 5000);
//    }
//    setTimeout(nextBackground, 5000);
//      header.css('background', backgrounds[0]);
//      heroTitle.html(titles[0]);
//      heroText.html(texts[0]);
//  });


// Deliveries counter

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

$(window).scroll(function(event) {

  $(".module").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});

var win = $(window);
var allMods = $(".module");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});
$(document).ready(function() {
  $('.slides').slick({
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    slidesToShow: 1
  });


  var memberPhotos = $('.member-img');
  var memberBio = $('.number-text-bio');
  var memberCont = $('.member-cont');
  var arrow = $('.arrow-down');
  memberCont.click(function() {
    var current = $(this);
    if (current.find(memberPhotos).css('display') == 'none') {
        current.find(arrow).css('transform', 'rotate(180deg)');
        current.css('background', 'rgba(178.211.238) !important');
    } else  {
        current.find(arrow).css('transform', 'rotate(0deg)');
        current.css('background', 'rgb(240.240.240) !important');
    }
    current.find(memberPhotos).slideToggle(300);
    current.find(memberBio).slideToggle(400);


    // console.log($(this).closest('[class^="member"].member-img'));
  });

});






function initMap() {
  var myLatLng = {lat: 51.367682, lng: -0.192808};
  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#e7ad47'},
          {visibility: 'simplified'},
          {gamma: 0.5},
          {weight: 0.5},
          {saturation: 10}
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'on'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#F0CE4E'}]
      }
    ], {
      name: 'Custom Style'
  }
  );
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: myLatLng,
    disableDefaultUI: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: false,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });


   map.addListener('center_changed', function() {
// 3 seconds after the center of the map has changed, pan back to the
// marker.
window.setTimeout(function() {
  map.panTo(marker.getPosition());
}, 250);
});


  var marker = new google.maps.Marker({
position: myLatLng,
map: map,
title: 'Hello World!'
});

  marker.addListener('click', function() {
map.setZoom(8);
map.setCenter(marker.getPosition());
});


  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
  map.setOptions({draggable: false});
}
