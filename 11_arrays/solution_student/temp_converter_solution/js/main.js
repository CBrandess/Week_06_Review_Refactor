
$('#fahrenheit_to_celsius').on('click', function() {
// when user clicks f to c function the following function happens
  var temp = parseFloat($('#temperature').val());
// temp has been defined as a variable, parse floats converts a string value into a float
  var convertedTemp = (temp - 32) * 5/9;
// convertedTemp has been defined as a variable and formula for f to c has been input

  backgroundChange(temp);
// calling function background change as applies to temp variable (passing an argument, the variable temp)
  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {
// if the input is not a number error message is displayed
    addError();
// otherwise if it is a number - run the following code
  } else {
// else if the input is a number display the result - print out the converted temp plus the verbage degree symbol
    $('#result').html(temp + "&deg;F = " + convertedTemp + "&deg;C");

  }
});


$('#celsius_to_fahrenheit').on('click', function() {
// / when user clicks c to f function the following function happens
  var temp = parseFloat($('#temperature').val());
//  temp has been defined as a variable, parse floats adds decimal
  var convertedTemp = temp * 9 / 5 + 32;
// convertedTemp has been defined as a variable and formula for c to f has been input
  backgroundChange(convertedTemp);
// calling function background change as applies to temp variable

  // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
  if (isNaN(temp)) {
// if the input is not a number error message is displayed

    addError();

  } else {
// else if the input is a number display the result
   
    $('#result').html(temp + "&deg;C = " + convertedTemp + "&deg;F");

  }
});


function backgroundChange(temp) {
// Calls backgroundChange function, to cold, mild, or hot classes based ont eh temperature. 
  $('body').attr('class', '');
// select body add attribute class and remove class
  if (temp < 50) {
// if the temp is < 50 add the following class
    $('body').addClass('cold');

  } else if (temp >= 50 && temp <= 70) {
// else if the temp is >= 50 & <=70 add the following class
    $('body').addClass('mild');

  } else if (temp > 70) {
// else if the temp is >70 add the following class
    $('body').addClass('hot');

  }
}


function addError() {

  $('#temperature').addClass('error');

  $('.error-message').fadeIn(500).html('Please enter a value.');

}


function clearError() {

  $('.error-message').fadeOut(500);

  $('#temperature.error').removeClass('error');

}


$('#temperature').on('keyup', function() {

  $('#result').html('');

  clearError();

});
