/**************************************************/
// PROBLEM 1 - "typeof Data Values"

//Number Type

var numOne = 1;
var numTwo = 2;
console.log(numOne + numTwo);

//String Type

var j = "Java";
var s = "script";
console.log(j + s);

//Boolean Type

var a = "Apples";
var b = "Bananas";
console.log(a == b);

/**************************************************/
// PROBLEM 2 - Using Loops to Create Pyramids

var pound = "";
for (var i = 0; i < 10; i++) {
pound = pound + "#";
console.log(pound);
}

/**************************************************/
// PROBLEM 3 - FizzBuzz

for (var num = 1; num <= 100; num += 1) {
  var result = "";
if (num % 3 == 0) result = "Fizz";
  	if (num % 5 == 0) result = "Buzz";
        if(num % 3 == 0 && num % 5 == 0) result = "FizzBuzz";
      console.log(result || num)
}
