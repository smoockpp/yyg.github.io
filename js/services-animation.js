var elementMovement = {
  element1: $('.grid1'),
  element2: $('.grid2'),
  element3: $('.grid3'),
  numberTimeout1: $('.number-timeout1'),
  numberTimeout2: $('.number-timeout2'),
  numberTimeout3: $('.number-timeout3'),
  moveElem1: function() {
    elementMovement.element1.fadeTo('normal', 1);
    var numberEnd = elementMovement.numberTimeout1.html();
    console.log(numberEnd);
    var numberStart = 1;
    // function startCount() {
    //   elementMovement.numberTimeout1.html(numberStart);
    //
    // }
    // startCount();
  },
  moveElem2: function() {
    elementMovement.element2.fadeTo('slow', 1);
  },
  moveElem3: function() {
    elementMovement.element3.fadeTo('fast', 1);
  }
}

setTimeout(elementMovement.moveElem1, 700);
setTimeout(elementMovement.moveElem2, 900);
setTimeout(elementMovement.moveElem3, 800);

var options = {
  useEasing : true,
  useGrouping : true,
  separator : ',',
  decimal : '.',
  prefix : '',
  suffix : ''
};
// var demo = new CountUp("myTargetElement", 0, 7002, 0, 1.5, options);
// demo.start();

function gridChange() {
  var servicesDiv = $('.services');
  var allGrids = $('.grid-full');
  var headingText = $('.services .number');
  var gridToChange = $('.grid-full:not(:last-child)');
  if ($(window).width() >= 1024) {
    servicesDiv.css({'display' : 'flex',
                     'flex-direction' : 'row',
                     'align-items' : 'stretch',
                     'flex-wrap' : 'wrap'});
    headingText.css('flex-basis', '100%');
    allGrids.css('flex-basis', '100%');
    gridToChange.addClass('grid-half');
    gridToChange.css({'margin': '50px 0',
                      
                      'flex-basis' : '50%',
                      'padding-top' : '10px'});
  } else {
    servicesDiv.css('display', 'block');
    gridToChange.removeClass('grid-half');
    gridToChange.css({'margin' : '50px auto'});
  }
}

gridChange();

$(window).resize(function() {
  gridChange();
});
