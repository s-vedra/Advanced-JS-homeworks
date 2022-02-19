//constructor function for our characters
function Character(name, height, gender, mass) {
  this.name = name;
  this.height = height;
  this.gender = gender;
  this.mass = mass;
}

//fetch the api data and return the value in a js object
let fetchData = () => {
  return fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((response) => response);
};

//this is for the homework, a basic array with some numbers
let someArray = [20, 5, 6, 10, 88, 69];

//function like the .map() where it takes every number from the array and later later when its called it returns whatever the callback function tells it to do
let thisMap = (array, callback) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
};

//function like the .filter() function where it takes every number from the array and later when its called it returns whatever the callback function tells it to do
let thisFilter = (array, callback) => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

//function like ,forEach()
let thisForEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = callback(array[i]);
  }
};

//calling the functions
console.log(thisMap(someArray, (e) => e * 10));
console.log(thisFilter(someArray, (e) => e > 50));
thisForEach(someArray, (e) => console.log(e));

//bonus
//creating a function like the .forEach() method
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
//creating a function like the .map() method
Array.prototype.myMap = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};
//creating a function like the .filter() method
Array.prototype.myFilter = function (callback) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};
//function to create the characters from the given value
let createChar = (value, array) => {
  setTimeout(() => {
    value.myForEach((character) => {
      character = new Character(
        character.name,
        character.height,
        character.gender,
        character.mass
      );
      array.push(character);
    });
    console.log(array);
  }, 1000);
};

//function to get the mass value and multiplied by 10
let showMass = (array) => {
  setTimeout(() => {
    let mass = array.myMap((character) => {
      return character.mass * 10;
    });
    console.log(mass);
  }, 2000);
};
//function to filter out the female char from the values
let showFemale = (array) => {
  setTimeout(() => {
    let filterOutFemale = array.myFilter((character) => {
      return character.gender === "female";
    });
    console.log(filterOutFemale);
  }, 4000);
};

let storeData = (value) => {
  //empty array
  let arr = [];
  //calling the functions
  createChar(value.results, arr);
  showMass(arr);
  showFemale(arr);
};

(getData = () => {
  fetchData().then((response) => storeData(response));
})();
