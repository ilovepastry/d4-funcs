const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGrades = grades.filter((num) => (num >= 70));

console.log("Subset of passingGrades:", passingGrades);



/*const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
  return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);*/

/*Write code to filter this list down to only passing grades.

This node script should print out passing grades to the console. 
Passing grades for this scenario can be those that are 70 or above.

Tips
Use the Array filter function (as shown previously) to print out only the passing 
grades.
Start by declaring the callback function and then later refactor it to 
be inline and anonymous, or start with an anonymous function to begin with.
Convert the anonymous function into an arrow function in order 
to get some practice with them.*/
