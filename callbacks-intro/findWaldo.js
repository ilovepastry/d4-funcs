// The second argument/parameter is expected to be a (callback) function
/* 
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

.forEach(func)
var myArray = [1, 2, 3, 4, 5];
  myArray.forEach(function(elem){
  console.log(elem)

let myArray = ["Alice", "Bob", "Waldo", "Winston"];
  myArray.forEach(function(names){ */

/*[1, 2, 3, 4].forEach(function(currentElement){
  console.log(currentElement)
})

[1, 2, 3, 4].forEach(currentElement => console.log(currentElement))

[1, 2, 3, 4].forEach(currentElement => {
  if (currentElement > 2) {
    console.log(currentElement)
  }
  }
 )*/

const newFindWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);   // execute callback
    } 
  } )

  }


const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i);   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at ${index}!`);
}

newFindWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
/* Modify the callback function in the previous example so that it accepts 
a single argument index and logs it. 
The problem should therefore output something like "Found Waldo at index 2!".

Copy the waldo searching code above into the JS file
Run it via terminal to make sure that it is working as expected
Modify the actionWhenFound function to let it receive and use the index
Modify the findWaldo function so that it passes the index array to the callback

Refactor the function findWaldo to use the forEach() method instead of a for loop.
*/
