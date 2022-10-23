/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

let finalAmount = 0;
let tipAmount = 0;
let finaltipInput = 0;
let finalcalculateBillTotalAmount = 0;

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let calculateBillTotalAmount = document.getElementById('billTotalInput');
let tipInput = document.getElementById('tipInput');
let totalAmount = document.getElementById('perPersonTotal');


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    finalcalculateBillTotalAmount = Number(calculateBillTotalAmount.value);

    finaltipInput = Number(tipInput.value);

    // get the tip from user & convert it into a percentage (divide by 100)
    tipAmount = calculateBillTotalAmount.value * (tipInput.value * 0.01);

    // calculate the total (tip amount + bill)
    finalAmount = finalcalculateBillTotalAmount + tipAmount;

    // update the perPersonTotal on DOM & show it to user
    // calculate the per person total (total divided by number of people)
    totalAmount.innerText = "$ " + (finalAmount).toFixed(2);

}

// ** Splits the bill between more people **
const increasePeople = () => {
    let getNumber = document.getElementById('numberOfPeople');
    let finalGetNumber = Number(getNumber.innerText)

    // increment the amount of people
    let getNumberOfPeople = finalGetNumber
    getNumberOfPeople += 1;

    // update the DOM with the new number of people
    getNumber.innerText = getNumberOfPeople

    // calculate the bill based on the new number of people
    totalAmount.innerText = "$ " + (finalAmount / getNumberOfPeople).toFixed(2);


}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    let getNumber = document.getElementById('numberOfPeople');
    let finalGetNumber = Number(getNumber.innerText)
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    
    // decrement the amount of people
    let getNumberOfPeople = finalGetNumber
    if (getNumberOfPeople > 0) {
        getNumberOfPeople -= 1;
    }
    else {
        alert("you can't decrease the number of people to 0 or negative!");
    }

    // update the DOM with the new number of people
    getNumber.innerText = getNumberOfPeople


    // calculate the bill based on the new number of people
    totalAmount.innerText = "$ " + (finalAmount / getNumberOfPeople).toFixed(2);

}