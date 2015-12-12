//affix navbar
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

//affix sidebar
$('#sidebar').affix({
      offset: {
        top: 280
      }
});


//center navbar
var width = $('.justified').width();
$('.justified').css('margin-left', '-' + (width / 2)+'px');
