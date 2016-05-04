$(document).ready(function () {
//an object to put my colors in.
  var colorBlock = {};
  //a variable that calls pickNumber to generate the initial color for the game
  var firstColor = pickNumber();
  //the function that appends every element to the dom and assigns data to each element
  function appendDom(blocks) {
    $('#blocks').append('<span class="randoColor">' + firstColor + '</span>');
    $('#blocks').append('<p class="paragraph"></p>');
    $('#blocks').append('<button class="colorFire">Firebrick</button>');
    $('#blocks').append('<button class="colorAlmond">Blanched Almond</button>');
    $('#blocks').append('<button class="colorFuchsia">Fuchsia</button>');
    $('#blocks').append('<button class="colorKhaki">Khaki</button>');
    $('.colorFire').data('color', 'firebrick');
    $('.colorAlmond').data('color', 'almond');
    $('.colorFuchsia').data('color', 'fuchsia');
    $('.colorKhaki').data('color', 'khaki');
}
//here we call the function and store everything in the object
  appendDom(colorBlock);
//these individual statements are click handlers for each individual button
  $('#blocks').on('click', '.colorFire', function () {
//if and else for determining if what they clicked was correct and displaying the right messages
    if (firstColor == $(this).data('color')) {
      $('#blocks p').text('Success!');
      //you have to call the variable with the function again to change colors.
      firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    } else {
      $('#blocks p').text('Nice try, nerd.');
      //firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    }
  });
  $('#blocks').on('click', '.colorAlmond', function () {
    if (firstColor == $(this).data('color')) {
      $('#blocks p').text('Success!');
      firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    } else {
      $('#blocks p').text('Nice try, nerd.');
      //firstColor =pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    }
  });
  $('#blocks').on('click', '.colorFuchsia', function () {
    if (firstColor == $(this).data('color')) {
      $('#blocks p').text('Success!');
      firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    } else {
      $('#blocks p').text('Nice try, nerd.');
      //firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    }
  });
  $('#blocks').on('click', '.colorKhaki', function () {
    if (firstColor == $(this).data('color')) {
      $('#blocks p').text('Success!');
      firstColor = pickNumber();
      $('.randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    } else {
      $('#blocks p').text('Nice try, nerd.');
      //firstColor = pickNumber();
      $('#randoColor').replaceWith('<span class="randoColor">' + firstColor + '</span>');
    }
  });
//generates a random number
    function randomNumber(){
      return Math.floor(Math.random() * (1 + 4 - 1) + 1);
  }

//a function to use the random number that is stored in the variable and pass it into a switch
  function pickNumber () {
    var randomNum = randomNumber();
    /*the switch takes random number and assigns a new variable with the color for
    the correct case.*/
    switch (randomNum) {
    case 1:
     var trueColor = "firebrick";
      break;
    case 2:
      var trueColor = "almond";
        break;
    case 3:
     var trueColor = "fuchsia";
      break;
    case 4:
     var trueColor = "khaki";
      break;
}
//return the variable OUTSIDE the switch or it wont be accessible
    return trueColor;

}
//this function checks to see if the color knows which color it is.
function retrieveColor () {
  var correctColor = $(this).data('color');
  console.log(correctColor);
}
});
