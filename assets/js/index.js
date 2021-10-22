let vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

$(document).ready(function () {
  $('#faq-accordion').accordionjs({
    closeAble: true,
    slideSpeed: 400,
  })

  $('.anchor').on('click', function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 700)
  })
  $('.nav-footer-list .nav-footer__link').hover(function () {
    $('.nav-footer__link').removeClass('active')
    $(this).toggleClass('active')
  })
})
