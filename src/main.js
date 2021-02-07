import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/galactic-age.js';

$("form#userInput").submit((event) => {
  event.preventDefault();
  const age = parseInt($("input#ageInput").val());
  const planet = $("select#planetSelect").val();
  const gender = $("input:radio[name=genderRadios]:checked").val();
  const activityLevel = $("input:radio[name=activityRadios]:checked").val();
  
  const user = new Person(age, gender, activityLevel);
  $("#galacticAge").text(user.getGalacticAge(planet));
  $("#lifeExpectancyResult").text(user.getGalacticLifeExpectancy(planet));
});