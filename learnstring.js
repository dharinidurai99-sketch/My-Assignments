let str ='Hello World'
let splitstr = str.split(' ')//Split the string into an array of words
console.log(splitstr);
let outputstr = str.substring(6,11) //Find the last words in the array
console.log(outputstr);
console.log(`The length of the string is: ${str.length}`); //Calculate the length of the word.

let str1 =  "   fly me   to   the moon  "
str1= str1.trim();   //Trim the string
let splitstr1 =str1.split(' ');  //split the string
console.log(splitstr1);
let latspace = str1.lastIndexOf(' '); 
let lastword = str1.substring(latspace + 1) //Find the last word in the string
console.log(`Last Word is ${lastword}`);//Identify the last word 
console.log("Length of last word:", lastword.length);//calculate the length of the last word
return lastword.length;//Return the length

