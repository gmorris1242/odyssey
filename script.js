// ACCORDION
let multipleOpen = false; //DEFAULT

$('.accordion-title').click(function() {
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).children('.accordion-content').removeClass('open');
  } else {
    if ($(this).closest('.accordion').attr('data-multiple-open')) {
      multipleOpen = JSON.parse($(this).closest('.accordion').attr('data-multiple-open'));
    }

    if (multipleOpen) {
      $(this).toggleClass('active');
      $(this).children('.accordion-content').toggleClass('open');
    } else {
      $('.accordion-content').removeClass('open');
      $(this).children('.accordion-content').addClass('open');
      $('.accordion-title').removeClass('active');
      $(this).addClass('active');

    }
  }
});


$('.accordion-content').height()
