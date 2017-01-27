'use strict';

$(document).ready(function() {
  $('.hamburger').on('click', '#confirm', function() {
    $(this).parent().parent().parent().remove();
  });
  $('.ageFScreen').on('click', '#deny', function() {
    $('.age2').children().remove();
    $('.age2').append('<h2 style="padding-top: 55px;max-width: 80%;margin:0 auto;">Sorry, you must be 21 or older to view this site.</h2>');
  });
});