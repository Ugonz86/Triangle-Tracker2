var triangle = function(side1, side2, side3) {
  if (side1 + side2 < side3 || side1 + side3 < side2 || side2 + side3 < side1) {
    return "This is not a triangle";
  }
  if (side1 === side2) {
    if (side2 === side3) {
      return "Equilateral";
    }
    else if (side2 !== side3) {
      return "Isosceles";
    }
  }
  else {
    return "Scalene";
  }
}

$(document).ready(function() {
  $('.triangle-form').submit(function(event){
    event.preventDefault();

    var side1t = $('#side1').val();
    var side2t = $('#side2').val();
    var side3t = $('#side3').val();

    var endResult = triangle(side1t, side2t, side3t);

    $("#result").text(endResult);
    $(".result").show();
  });
});
