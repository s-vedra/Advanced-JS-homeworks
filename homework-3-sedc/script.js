//function to fetch the data from the api
let fetchData = async () => {
  return (
    await fetch("https://json-server-boris.herokuapp.com/api/students")
  ).json();
};

//function to call the other functions and console the data
let filterData = async () => {
  try {
    let res = await fetchData();
    console.log(filterOut(res), printOutFullNames(res)),
      citiesUpperCase(res),
      console.log(maleUsers(res), averageGrade(res)),
      addTwoToAvgGrade(res),
      console.log(
        res,
        sortOutByLastName(res),
        sortOutByAge(res),
        maleAndFemale(res)
      );
  } catch (e) {
    console.log("error");
  }
};

//filter out the users that are below 18 years old
let filterOut = (res) => {
  return res.filter((users) => {
    if (users.age < 18) {
      return users;
    }
  });
};

//print out the first and last name of the users
let printOutFullNames = (res) => {
  return res.map((users) => {
    return users.firstName + " " + users.lastName;
  });
};

//print out the cities in capital letters
let citiesUpperCase = (res) => {
  res.forEach((cities) => {
    console.log(cities.city.toUpperCase());
  });
};

//print out the male users that are above 21
let maleUsers = (res) => {
  return res.filter((males) => {
    if (males.gender === "Male" && males.age > 21) {
      return males;
    }
  });
};

//print out the average grade of all the users in the data
let averageGrade = (res) => {
  return res.reduce((acc, grade) => {
    return acc + grade.averageGrade / res.length;
  }, 0);
};

//multiply the average grade by 2
let addTwoToAvgGrade = (res) => {
  res.forEach((grade) => {
    console.log(Math.floor(averageGrade(res) * 2));
  });
};

//sort out the users by last name alphabetically
let sortOutByLastName = (res) => {
  return [].concat(res).sort((userOne, userTwo) => {
    if (userOne.lastName > userTwo.lastName) {
      return 1;
    } else if (userOne.lastName < userTwo.lastName) {
      return -1;
    }
    return userOne + " " + userTwo;
  });
};

//sort out the users by age
let sortOutByAge = (res) => {
  return [].concat(res).sort((userOne, userTwo) => {
    return userOne.age - userTwo.age;
  });
};

//return 2 arrays, one containing the female users and the other containing the male users
let maleAndFemale = (res) => {
  return res.reduce(
    (acc, userGender) => {
      if (userGender.gender === "Female") {
        acc[0].push(userGender);
      } else {
        acc[1].push(userGender);
      }
      return acc;
    },
    [[], []]
  );
};

//call the function
filterData();
