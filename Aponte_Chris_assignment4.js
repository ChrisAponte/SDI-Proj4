// Christopher Aponte
// SDI-1311
// Project 4

//variables
var numberArray = [12,65,32,21,78,90];
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

//Validate E-mail
var validateEmail = function(string) {
    
    var atCharacter = string.lastIndexOf('@');
    var dotCharacter = string.lastIndexOf('.');
        return (atCharacter < dotCharacter && atCharacter > 0 && string.indexOf('@@') ==
            -1 && dotCharacter > 2 && (string.length - dotCharacter) > 2);
    
};// End validate email

//Validate URL
var validateUrl = function(string) {
    
    var test1 = string.substring(0, 5);
    var test2 = string.substring(0, 6);
    var test3 = string.substring(0, 4);
        if (test1 === "http:" || test2 === "https:" || test3 === "www.") {
            return true;
        }else {
            return false;
    }
    
};// End validate email

//Title-case a string
var TitleCase = function(string) {
    
    var stringTest = "";
    var stringContent = string.split(" ");
    var index = 0;
        while (index < stringContent.length) {
            var mkTitle = stringContent[index].charAt(0)
            mkTitle = mkTitle.toUpperCase();
            var wordLength = stringContent[index].length;
            var word = stringContent[index].substring(1, wordLength);
            index++;
            stringTest += mkTitle + word + " ";
        }
    return stringTest;
};// End Title-case a string

//Array Functions

//Find the smallest value in an array
var findSmallValue = function(array, number) {
    
    array.sort(function(a,b) {return a-b;});
        if (number >= array[0] && number < array[array.length -1]) {
            array.push(number);
            array.sort(function(a,b) {return a-b;});
            var result = array[array.lastIndexOf(number) +1];
            return result;
        }else {
            return null;
        }
    
};//End find smallest value

//Function calls

console.log("It is " + (validatePhoneNum ("407-939-6244")) + " that it is a phone number.");
console.log("It is " + (validateEmail ("caponte74@fullsail.edu")) + " that it is an E-mail address.");
console.log("It is " + (validateUrl ("www.github.com")) + " that this is a valid URL.");
console.log(TitleCase ("lock stock and two smoking barrels"));
console.log("The smallest value in the array that is greater than the given number is "
            + findSmallValue(numberArray,14));