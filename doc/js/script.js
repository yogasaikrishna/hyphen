$(document).ready(function() {
  $('.tabs__menu__item').click(function() {
    $('.tabs__menu__item').each(function() {
      $(this).removeClass('tabs__menu__item--selected');
    });

    $(this).addClass('tabs__menu__item--selected');
  });
});
