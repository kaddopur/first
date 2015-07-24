var $height;
var $weight;
var $bmi;

function calculateBmi() {
  var height = parseInt($height.val(), 10) / 100;
  var weight = parseInt($weight.val(), 10);
  var bmi = weight / height / height;
  bmi = Math.round(bmi * 100) / 100;

  $bmi.text(bmi);
}

$(document).ready(function () {
  $height = $('#height').first();
  $weight = $('#weight').first();
  $bmi = $('#bmi').first();

  $height.on('keypress', calculateBmi);
  $weight.on('keypress', calculateBmi);
});
