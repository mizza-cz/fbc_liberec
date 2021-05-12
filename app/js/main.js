$(document).ready(function () {
  $('.otazky__menu span').on('click', function () {
    $(this).closest('.otazky__menu li').toggleClass('active');
  });

  /// tabs
  $('.bottom__inner .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.bottom__inner').find('.tab__content').removeClass('active-tab').hide();
    $('.bottom__inner .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('active-tab')
      .fadeIn();
    return false;
  });
  var $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      400,
    );
    return false;
  });
  //E-mail Ajax Send
  $('.form').submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});
