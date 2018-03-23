// Given an age in seconds, calculate how old someone would be on:
//
// Earth: orbital period 365.25 Earth days, or 31557600 seconds
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old,
// you should be able to say that they're 31.69 Earth-years old.
var age_in_second = x;

31557600 seconds = 0.2408467 mercury years
31557600 seconds = 1 earth year
second/earth_seconds * plant_years

function ages_on_planet(seconds) {
  var seconds = seconds;
  var earth_seconds = 31557600;
  var answer = "";
    switch(planet) {
      case "Vercury":
        answer += "You are " + (seconds/earth_seconds)*0.2408467 + " Mercury-years old."
        break;
      case "Venus":
        answer += "You are " + (seconds/earth_seconds)*0.61519726 + " Venus-years old."
        break;
    }
//   switch (expression) {
// case value1:
//   //Statements executed when the
//   //result of expression matches value1
//   [break;]
// case value2:
//   //Statements executed when the
//   //result of expression matches value2
//   [break;]
// ...
// case valueN:
//   //Statements executed when the
//   //result of expression matches valueN
//   [break;]
// [default:
//   //Statements executed when none of
//   //the values match the value of the expression
//   [break;]]
}


}
