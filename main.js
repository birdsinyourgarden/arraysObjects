// creating an array 

/*let fruits = ['apple', 'banana', 'cherry']

// accessing elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry

// adding an Element
fruits.push('date');
console.log(fruits); 

let numbers = [40, 100, 1, 5, 25, 10];

// Default sort (as strings)
numbers.sort();
console.log(numbers);

let numbers2 = [40, 100, 1, 5, 25, 10];

// Sot numerically
numbers2.sort((a, b) => a - b);
console.log(numbers2);


// if a < b, the result is negative (eg 1 - 5, gives -4) meaning a should come before b 

// It might first compare 40 and 100, returning a negative value (40 - 100 gives -60), so 40 stays before 100.
// Then it compares 100 and 1, returning a positive value (100 - 1 gives 99), so 1 goes before 100.

let colors = ['red', 'green', 'blue'];
colors.reverse();
console.log(colors);

let fruits2 = ['apple', 'banana', 'cherry', 'date'];
fruits2.splice(1, 1, 'kiwi');
console.log(fruits2);

let numbers3 = [1, 2, 3, 4, 5];
let newNumbers = numbers3.slice(1, 4);
console.log(newNumbers); // [2,3,4]

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = array1.concat(array2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

let numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach((num) => {
    console.log(num * 2); // Output: 2, 4, 6, 8, 10
});


// objects 

// creating an object 

let person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'travelling'],
};

// accessing properties 
console.log(person.name); // dot notation 
console.log(person[age]); // bracket notation 
console.log(person.hobbies[0]); // reading
*/
let person = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
  },
  job: {
      title: 'Developer',
      company: 'Tech Corp'
  }
};

console.log(person.address.city);
console.log(person.job.title);

// Updating a nested property 

person.address.city = "Seville";
console.log(person.address.city);

// adding a new property to a nested object
person.job.salary = 80000;
console.log(person.job.salary);

// delete

delete person.job.salary;
console.log(person.job);

