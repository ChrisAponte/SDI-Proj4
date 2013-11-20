// Christopher Aponte
// SDI-1311
// Project 4

//variables
var numberArray = [98,76,14,24,10,62];
var favoriteCarsArray = [4, "Ls400", 6, "Corola", 8, "535is", 7, "Gs350", 5, "Sorento"];

//String Functions

//Validate phone number
var validatePhoneNum = function(string) {

    var end = string.indexOf("-");
    var start = string.indexOf("-")+1;
    var end1 = string.length;
    var areaCd = string.substring(0, end);
    var firstSet = string.substring(4,7);
    var lastSet = string.substring(8,12);
    var phoneNumbr = areaCd + "-" + firstSet + "-" + lastSet;
        if (string === phoneNumbr) {
            return true;
        }else {
            return false;
    }
    
};// End validate phone number

//Function calls

console.log("It is " + (validatePhoneNum ("407-939-6244")) + " that it is a phone number.");