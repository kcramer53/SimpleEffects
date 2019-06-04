// $(document).ready(function() {
//   $("p").click(function() {
//     $("walrus-showing").show();
//     $("walrus-hidden").hide();
//   });
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
});
$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").addClass("red-background");
  });
});
