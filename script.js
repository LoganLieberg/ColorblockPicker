$(document).ready(function () {
  var colorBlock = {};
  var firstColor = pickNumber();
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

  appendDom(colorBlock);

  $('#blocks').on('click', '.colorFire', function () {
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

    function randomNumber(){
      return Math.floor(Math.random() * (1 + 4 - 1) + 1);
  }


  function pickNumber () {
    var randomNum = randomNumber();
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
    return trueColor;

}
function retrieveColor () {
  var correctColor = $(this).data('color');
  console.log(correctColor);
}
});
