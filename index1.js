// hide the story from view
$("#result").hide();
  
// ---- event handler ---- //
$(".btn-click").click(function(e) {

  e.preventDefault()

  // grab the values from the input boxes, then append them to the DOM
  $(".name").empty().append($("input.name").val());
  $(".character").empty().append($("input.character").val());
  $(".adverb").empty().append($("input.adverb").val());
  $(".adjective").empty().append($("input.adjective").val());

  // show the story
  $("#result").show();

  // empty the form's values
  $(':input').val('');



});