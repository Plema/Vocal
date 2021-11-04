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

  $('.tabs-triggers .tabs-triggers__item-all').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .blog-list__item').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-1').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-1').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-2').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-2').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-3').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-3').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-4').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-4').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-5').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-5').addClass('active')
  })
  $('.tabs-triggers .tabs-triggers__item-6').on('click', function (e) {
    e.preventDefault()
    $('.blog-list .blog-list__item').removeClass('active')
    $('.tabs-triggers__item').removeClass('active')
    $(this).toggleClass('active')
    $('.blog-list .label-6').addClass('active')
  })

  $('.close').on('click', function () {
    $('.modall').removeClass('active')
  })

  // jQuery(function ($) {
  //   $(document).mouseup(function (e) {
  //     var div = $('.modall-body')
  //     if (!div.is(e.target) && div.has(e.target).length === 0) {
  //       div.removeClass('active ')
  //       $('.modall').removeClass('active ')
  //     }
  //   })
  // })

  $('.communication-btn').on('click', function () {
    $('.modall').removeClass('active')
    $('.modall-communication').addClass('active')
  })
  // $('.tabs-triggers .tabs-triggers__item').on('click', function (e) {
  //   e.preventDefault()

  //   $('.tabs-triggers__item-all').removeClass('active')
  //   $('.tabs-triggers__item').removeClass('active')
  //   $('.blog-list__item').removeClass('active')

  //   $(this).addClass('active')
  //   $($(this).attr('href')).addClass('active')
  // })
  $(function () {
    $('*[placeholder="Ваше телефон"]*').mask('+0 (000) 000 00 00')
  })
})
