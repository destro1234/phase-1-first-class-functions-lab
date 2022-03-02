// Code your solution in this file!
const returnFirstTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
}

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    let fare = function () {
        return int * int;
    }
    return fare;
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function (arrayOfDrivers, cb) {
   if (cb == returnFirstTwoDrivers) {
       return returnFirstTwoDrivers(arrayOfDrivers)
   } else {
       return returnLastTwoDrivers(arrayOfDrivers);
   }
}