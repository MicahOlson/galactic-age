import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/galactic-age.js';

let user;
$("form#userInput").submit((event) => {
  event.preventDefault();
  const age = parseInt($("input#ageInput").val());
  const planet = $("select#planetSelect").val();
  const gender = $("input:radio[name=genderRadios]:checked").val();
  const activityLevel = $("input:radio[name=activityRadios]:checked").val();
  
  user = new Person(age, gender, activityLevel);
  $("#galacticAge").text(user.getGalacticAge(planet));
  $("#lifeExpectancyResult").text(user.getGalacticLifeExpectancy(planet));
  $("#seeAllLink").show();
});

$("#seeAllLink").click(() => {
  $("tr#appendedTableRows").remove();
  $("#allStats").show();
  for (const planet in user.galacticAges) {
    $("#statsTable").append(`<tr id="appendedTableRows"><td>${planet}</td><td>${Math.round(user.galacticAges[planet])}</td><td>${Math.round(user.galacticLifeExpectancies[planet])}</td></tr>`);
  }
});