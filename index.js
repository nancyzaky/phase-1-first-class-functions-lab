// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return [arr[0], arr[1]];
}

const returnLastTwoDrivers = (arr) => {
  const newArr = arr.slice(-2);
  return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => {
  return (num)=> {
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2);






 const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arr, func)=> {
  return func(arr);
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.