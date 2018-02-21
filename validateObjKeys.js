'use strict'

// running the function with `objectA` and `expectedKeys`
// should return `true`
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  //const objectB = {
 //   id: 3,
   // age: 33,
 //   city: 'Peoria',
 // };
  
 // const expectedKeys = ['id', 'name', 'age', 'city'];
  
//  function validateKeys(object, expectedKeys) {
 //   console.log(Object.keys(objectA)); // returns array of objectA keys

 //   }
//  }
//
  console.log(Object.keys(objectA));


// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

  