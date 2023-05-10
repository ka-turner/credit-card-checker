// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = array => {
    //start from the end of the array and work towards the beginning
    //As you move to the left, every other digit is doubled, not including the check digit. If the number is > 9 after doubling, subtract 9 from its value
    //Sum all of the digits in the array
        //IF sum % 10 == 0, then the number is valid (true), otherwise, invalid (false)

    let numberArray = [];
    let doubleArray = [];
    let oddsArray = [];
    let sumArray = [];
    let summation;

    for (let i = array.length - 1; i >= 0; i--) {
        numberArray.push(array[i]);
    }

    oddsArray = numberArray.filter((element, index) => {
        return index % 2 === 0;
    })
    doubleArray = numberArray.filter((element, index) => {
        return index % 2 !== 0;
    })
    doubleArray = doubleArray.map(number => {
        return number * 2
    })
    for (let j = 0; j < doubleArray.length; j++) {
        if (doubleArray[j] > 9) {
            doubleArray[j] -= 9;
        } else {
            doubleArray[j];
        }
    }
    sumArray = oddsArray.concat(doubleArray);
    
    summation = sumArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
    if (summation % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

function findInvalidCards(array) {
    let invalidCards = [];
    for (let k = 0; k < array.length ; k++) {
        if (validateCred(array[k]) === false) {
            invalidCards.push(array[k]);
        }
    }
    return invalidCards;
}

function idInvalidCardCompanies(array) {
    const invalidCardsArray = findInvalidCards(array);
    let firstNums = [];
    let uniqueFirstNums = [];
    let uniqueInvalidCompanies = [];

    for (let n = 0; n < invalidCardsArray.length; n++) {
        firstNums.push(invalidCardsArray[n][0])
    }

    //This function returns only unique values
    const uniqueValues = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    
    uniqueFirstNums = firstNums.filter(uniqueValues)
    
    for (x = 0; x < uniqueFirstNums.length; x++) {
        if (uniqueFirstNums[x] === 3) {
            uniqueInvalidCompanies.push('Amex (American Express)');
        } else if (uniqueFirstNums[x] === 4) {
            uniqueInvalidCompanies.push('Visa');
        } else if (uniqueFirstNums[x] === 5) {
            uniqueInvalidCompanies.push('Mastercard');
        } else if (uniqueFirstNums[x] === 6) {
            uniqueInvalidCompanies.push('Discover');
        } else {
            uniqueInvalidCompanies.push('Company not found')
        }
    }
    return uniqueInvalidCompanies;
}
//console.log(validateCred(valid1));
console.log(idInvalidCardCompanies(batch));








