
Describe: if (vowels.indexOf(str[0]) > -1)
Test: "It will determine if the string starts with a vowel"
Code: 
str = "hello"
 if (vowels.indexOf(str[0]) > -1) { 
    newStr = str + "way";
    return newStr;
Expected output: False


Describe: firstTwoChars
Test: "It will return the first 2 letters of a string"
Code: firstTwoChars("quick")
Expected output: "qu"

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Describe: pigLatin()
Test: "It will add an "ay" at the end of the word that starts with a consestant"
Code: pigLatin("hello")
Expected Output: "helloay"

Describe: pigLatin()
Test: "It will move the qu from the beginning of a word to the end and add way"
Input: pigLatin("quick")
Expected Output: "ickquay"




