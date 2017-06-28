$(document).on('turbolinks:load', function() {
  $('.remove_step_fields').click(function(e) {
    e.preventDefault();
    var parent_id = $(this).closest('div').attr('id');
    $('#' + parent_id).hide();
    $('#' + parent_id + '  :input[type=\'hidden\']').val(1);
  });

  $('.add_step_fields').click(function(ev) {
    ev.preventDefault();
    var regexp, time;
    time = new Date().getTime();
    regexp = new RegExp($(this).data('id'), 'g');
    $(this).before($(this).data('fields').replace(regexp, time));
  });
});
