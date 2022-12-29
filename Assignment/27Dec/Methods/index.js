// If two strings are ANAGRAMS of each other
//					positions of character can be different but characters will be same
//              => strings length should be same and same characters

let strOne = "Earth";
let strTwo = "Heart";

function sortStr(str) {
  return str.toLowerCase().split("").sort().join("");
}
// let a= sortStr(strOne)
// let b= sortStr(strTwo)

console.log(
  sortStr(strOne) == sortStr(strTwo) ? "is a anagram" : "not a anagram"
);

// ---------------------------------------------check if a given string is a palindrome ===>

/*
// let valOne = 'level';
let valOne = 1881;

let revVal = valOne.toString().split("").reverse().join("")
let strVal = valOne.toString()

console.log((strVal==revVal)?'its a palindrome':'not a palindrome')
*/
// -------------------------------------------------------------------------------

// let str="This is a string!";

// let str1=str.split(' ');
// let newstr=[];
// for(let i=str1.length-1;i>=0;i--){
//     newstr.push(str1[i]);
//     newstr.join("");
// }
// console.log(newstr);

/*
	function unique(s)
	{
		let str = "";
		let len = myString.length;
		for (let i = 0; i < len; i++)
		{
			let c = myString[i];
			if (str.indexOf(c) < 0)
			{
				// adding c to str if -1 is returned
				str += c;
			}
		}
		return str;
	}
	// Input string with repeating chars
	let myString = "hello how";

	console.log(unique(myString));

*/

//If two strings are anagrams of each other How do you check if a given string is a palindrome

function areAnagram(string1, string2) {
  let n1 = string1.length;

  let n2 = string2.length;

  // If length of both strings is not same,

  // then they cannot be anagram

  if (n1 != n2) return false;

  // Sort both strings

  string1.sort();

  string2.sort();

  // Compare sorted strings

  for (let i = 0; i < n1; i++) if (string1[i] != string2[i]) return false;

  return true;
}

let string1 = ["r", "a", "m"];

let string2 = ["a", "r", "m"];

// Function Call

if (areAnagram(string1, string2))
  console.log("The two strings are" + " anagram of each other");
else console.log("The two strings are not" + " anagram of each other");
