function keepElements(rip, n) {
    return rip.slice(0, n);
  }
let users = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let n = 5;
let result = keepElements(users, n);
console.log(result); // Output: ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava']
console.log(users); // Output: ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason']


function deleteSecondElement(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        result.push(arr[i]);
      }
    }
    return result;
  }

let user = ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason'];
let keep = deleteSecondElement(user);
console.log(keep); // Output: ['Isabella', 'Sophia', 'Ava', 'Emma', 'Olivia']
console.log(user); // Output: ['Isabella', 'Lucas', 'Sophia', 'Noah', 'Ava', 'Ethan', 'Emma', 'Liam', 'Olivia', 'Mason']
