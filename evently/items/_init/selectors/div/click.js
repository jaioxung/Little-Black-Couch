function() {
  $(this).trigger('detail', $.log($(this).attr('id')));
}