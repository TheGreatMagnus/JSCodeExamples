// To find the leap year, below three conditions has to be satisfied,
//
// 1. Year should be evenly divisible by 4 (year % 4 == 0)
// 2. AND (&&) Year should not be evenly divisible by 100 (year % 100 != 0)
// 3. OR (||) year should be evenly divisible by 400 (Year % 400 == 0)
//
// if both the 1st AND 2nd condition is true OR 3rd is true then it is a Leap year.





function leapYear(year) {
  if (year % 4 === 0){
    if (!(year % 100 !== 0)) {
    }
      if (year % 400 === 0) {
        return year + " is a leap year."
      }
  else {
      return year + " is not a leap year."
    }
}
};

leapYear(1996)
