function pigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";
  let firstTwoChars = str.slice(0, 2);

  if (vowels.indexOf(str[0]) > -1) { 
    newStr = str + "way";
    return newStr;
  } else if (firstTwoChars === "qu") {
    newStr = str.slice(2) + firstTwoChars + "ay";
    return newStr;
  } else {
    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
    return newStr;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const str = document.getElementById("text-passage").value;
  const translatedStr = pigLatin(str);
  document.getElementById("output").innerText = translatedStr;
}