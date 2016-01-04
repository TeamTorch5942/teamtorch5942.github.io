//affix navbar
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});

//center navbar
var width = $('.justified').width();
$('.justified').css('margin-left', '-' + (width / 2)+'px');
