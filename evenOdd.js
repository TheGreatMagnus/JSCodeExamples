// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
//
// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"


function evenOdd() {
var x = 0;
while (x <= 15) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
    x++;
}

}

console.log(evenOdd());


function evenOdd(){
for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }
        else {
                console.log(x + " is odd");
        }
}
}

console.log(evenOdd());
