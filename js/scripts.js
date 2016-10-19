$(document).ready(function() {
  $("#blanks form").submit(function() {
    var nameInput = $("input#name").val().toUpperCase();

    $(".name").text(nameInput)

    $("#letter").show();

    event.preventDefault();

    $(".letter-hidden").hide();
  });
});
