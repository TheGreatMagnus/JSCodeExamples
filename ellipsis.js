// write a function called spaces that takes a number as a parameter, and returns that
// number of ellipsis (" ... ").

// While loop warm up

var blank = "";

function spaces(n) {
    while (n > 0) {
     blank += " *** "
     n--;

   }
   return blank;
};

console.log(spaces(11))
