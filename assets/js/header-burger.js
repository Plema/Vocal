$(function () {
  $('.header-burger').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })
  $('.close-menu').click(function (event) {
    $('.header-burger,.header-menu').toggleClass('active')
    $('.body').toggleClass('lock')
  })

  $('.menu-list__item .menu-link').on('click', function () {
    if ($(this).hasClass('show-list')) {
      $(this).next().slideToggle('slow')
      $(this).toggleClass('show-list')
    } else {
      $('.menu-link').removeClass('show-list')
      $('.menu-link').next().slideUp()
      $(this).next().slideToggle('slow')
      $(this).toggleClass('show-list')
    }
  })

  $('.lang-list  li').map(function (index, el) {
    if (!$(el).hasClass('current-lang')) {
      $(this).insertAfter($('.lang-list  li:last'))
    } else {
      $(this).find('a').attr('href', 'javascript:void(0)')
    }
  })
  $('.lang-list  .current-lang').click(function () {
    $('.lang-list  li').toggleClass('active')
  })
})
