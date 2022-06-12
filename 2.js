// hide the story from view
$("#result").hide();
  
// ---- event handler ---- //
$(".btn-click").click(function(e) {

  e.preventDefault()

  // grab the values from the input boxes, then append them to the DOM
let wid = $('.width').val();
let height = $('.height').val();
let colors = $('.colors').val();

let size =  wid * height * colors / 8000;

$('.colors').empty().append(size);
  // show the story
  $("#result").show();

  // empty the form's values
  $(':input').val('');



});