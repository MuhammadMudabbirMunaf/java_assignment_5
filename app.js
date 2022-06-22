// Q.1 Positive Integer 
var numRound = prompt("Enter a positive number");
document.getElementById("RoundOff").innerText = "Number = " + numRound;

var aftRound = Math.round(numRound);
document.getElementById("AfterRoundOff").innerText = "Round Off Value = " + aftRound;

var floorRound = Math.floor(numRound);
document.getElementById("FloorRoundOff").innerText = "Floor Value = " + floorRound;

var ceilRound = Math.ceil(numRound);
document.getElementById("CeilRoundOff").innerText = "Ceil Value = " + ceilRound;

// Q.2 Negative Integer
var negRound = prompt("Enter a negative number");
document.getElementById("NegRoundOff").innerText = "Number = " + negRound;

var negAftRound = Math.round(negRound);
document.getElementById("NegAfterRoundOff").innerText = "Round Off Value = " + negAftRound;

var negFloorRound = Math.floor(negRound);
document.getElementById("NegFloorRoundOff").innerText = "Floor Value = " + negFloorRound;

var negCeilRound = Math.ceil(negRound);
document.getElementById("NegCeilRoundOff").innerText = "Ceil Value = " + negCeilRound;

// Q.3 Positive Floating Integer
var numFloatRound = prompt("Enter a positive floating number");
document.getElementById("FloatRoundOff").innerText = "Number = " + numFloatRound;

var aftFloatRound = Math.round(numRound);
document.getElementById("FloatAfterRoundOff").innerText = "Round Off Value = " + aftFloatRound;

var floorFloatRound = Math.floor(numRound);
document.getElementById("FloatFloorRoundOff").innerText = "Floor Value = " + floorFloatRound;

var ceilFloatRound = Math.ceil(numRound);
document.getElementById("FloatCeilRoundOff").innerText = "Ceil Value = " + ceilFloatRound;

// Q.4 Negative Floating Integer
var negRound = prompt("Enter a negative floating number");
document.getElementById("FloatNegRoundOff").innerText = "Number = " + negRound;

var negAftRound = Math.round(negRound);
document.getElementById("FloatNegAfterRoundOff").innerText = "Round Off Value = " + negAftRound;

var negFloorRound = Math.floor(negRound);
document.getElementById("FloatNegFloorRoundOff").innerText = "Floor Value = " + negFloorRound;

var negCeilRound = Math.ceil(negRound);
document.getElementById("FloatNegCeilRoundOff").innerText = "Ceil Value = " + negCeilRound;

// Q.5 Absolute Value
var absValue = prompt("Enter a number");
document.getElementById("AbsoluteValue").innerText = "Your value is " + absValue;
var aftAbsolute = Math.abs(absValue);
document.getElementById("AfterAbsoluteValue").innerText = "Absolute Value of input number is " + aftAbsolute;

// Q.6 Random Dice Value
var randomDiceNumber = Math.random();
var rounding = Math.ceil((randomDiceNumber) * 6);
document.getElementById("RandomDice").innerText = "Your Random Dice Value is " + rounding;

// Q.7 Coin Flip Value
var coinFlip = Math.random();
var coinRoundOff = Math.ceil((coinFlip) * 2);
document.getElementById("CoinFlip").innerText = "Random Coin Value is " + coinRoundOff;
if (coinRoundOff === 1) {
    document.getElementById("CoinFlip").innerText = "Random Coin Value is " + coinRoundOff + "Tails";
}
else{
    document.getElementById("CoinFlip").innerText = "Random Coin Value is " + coinRoundOff + "Heads";
}

// Q.8 Random Number From 1 to 100
var num = Math.random();
var numCeil = Math.ceil((num) * 100);
document.getElementById("NumberRoundOff").innerText = "Random Number From 1 to 100 is : " + numCeil; 

// Q.9

// Q.10 Secret Number
var secNum = parseInt(prompt("Enter/Guess a Number from 1 to 10"));
if (secNum === 5) {
   alert("Congratulations! Correct Guess");
} 
else if (secNum === 4) {
   alert("Near to correct guess, Nice try");
}
else if (secNum === 6) {
    alert("Near to correct guess, Nice try");
}
else {
    alert("Wrong Guess, Try Again, Better luck next time");
}

// Q.11 Current date and time
var cTime = new Date();
document.getElementById("CurrentDateTime").innerText = cTime;

// Q.12 Current Month
var cMonth = cTime.getMonth();
if (cMonth === 0) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : January " + cMonth;
} 
else if (cMonth === 1) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : February " + cMonth;
} 
else if (cMonth === 2) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : March " + cMonth;
} 
else if (cMonth === 3) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : April " + cMonth;
} 
else if (cMonth === 4) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : May " + cMonth;
} 
else if (cMonth === 5) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : June " + cMonth;
} 
else if (cMonth === 6) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : July " + cMonth;
} 
else if (cMonth === 7) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : August " + cMonth;
} 
else if (cMonth === 8) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : September " + cMonth;
} 
else if (cMonth === 9) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : October " + cMonth;
} 
else if (cMonth === 10) {
    document.getElementById("CurrentMonth").innerText = "Current Month is : November " + cMonth;
} 
else {
    document.getElementById("CurrentMonth").innerText = "Current Month is : December " + cMonth;
}
// Q.13 Current Day
var cDay = cTime.getDay();
if (cDay === 0) {
    document.getElementById("CurrentDay").innerText = "Today is Sun " + cDay;
} 
else if (cDay === 1) {
    document.getElementById("CurrentDay").innerText = "Today is Mon " + cDay;
} 
else if (cDay === 2) {
    document.getElementById("CurrentDay").innerText = "Today is Tue " + cDay;
} 
else if (cDay === 3) {
    document.getElementById("CurrentDay").innerText = "Today is Wed " + cDay;
} 
else if (cDay === 4) {
    document.getElementById("CurrentDay").innerText = "Today is Thu " + cDay;
} 
else if (cDay === 5) {
    document.getElementById("CurrentDay").innerText = "Today is Fri " + cDay;
} 
else {
    document.getElementById("CurrentDay").innerText = "Today is Sat " + cDay;
} 

// Q.14 Day Identification
if (cDay === "Sat") {
    alert("It's a Fun Day");
}
if (cDay === "Sun") {
    alert("It's a Fun Day");
}

// Q.15 Start or End of Month
var cDate = cTime.getDate();
if (cDate < "16") { 
    document.getElementById("CurrentDate").innerText = "Current Date is " + cDate + " First Fifteen Days of Month";
}
else {
    document.getElementById("CurrentDate").innerText = "Current Date is " + cDate + " Last Days of Month";
}

// Q.16 
var msDiff = new Date().getTime - new Date("January 1, 1970").getTime;
var remMs = Math.floor(msDiff / (1000 * 60));
document.getElementById("Totalms").innerText = "Total Milliseconds from January 1, 1970 till today " + msDiff;
document.getElementById("Totalmins").innerText = "Total Minutes from January 1, 1970 till today " + remMs;

// Q.17
var recentTime = cTime.getHours();
if (recentTime < "12") {
    alert("It's AM");
}
else {
    alert("It's PM");
}

// Q.18

// Q.19
var todayTime = cTime.getDay();
var dDiff = todayTime - getDay("April 3, 2022"); 
document.getElementById("DayDifference").innerText = "Days passed since 1st Ramadan 2022 : " + dDiff;