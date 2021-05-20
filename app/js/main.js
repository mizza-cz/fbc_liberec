$(document).ready(function () {
  $('.category .category-tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.category').find('.category__item').removeClass('category__item-active').hide();
    $('.category .category-tabs').find('.category-tab').removeClass('visiable');
    $(this).addClass('visiable');
    $('#' + id)
      .addClass('category__item-active')
      .fadeIn();
    return false;
  });
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
      alert('Zpráva byla odeslána.');
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});




