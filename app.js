// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)


// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar* 148;
    // return the Yen value
    return valueInYen;
}

// We declare the function with the exact name "fromYenToPoundr"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pounds
    let valueInPound = valueInYen* 0.0053;
    // return the Pound value
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

