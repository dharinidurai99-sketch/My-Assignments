let str = "Testleaf";

let reversed = str.split("").reverse().join("");

if (str === reversed) {
    console.log("It is a Palindrome");
} else {
    console.log("Not a Palindrome");
}