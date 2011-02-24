function() {
  $.log($(this).attr('id'))
  $(this).trigger('detail', $(this).attr('id'));
}