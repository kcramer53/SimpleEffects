// $(document).ready(function() {
//   $("p").click(function() {
//     $("walrus-showing").show();
//     $("walrus-hidden").hide();
//   });
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
});
