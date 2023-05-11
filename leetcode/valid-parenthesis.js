/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

str1 = '()'

function isValid(s) {
let stack = [];
for (let i = 0; i < s.length; i++) {
    //push left side 
    if (s[i] === '(' || s[i]=== '[' || s[i] === '{') {
        stack.push(s[i]);
    // check if both the right side is found and the left side is in the stack...pop what is in the stack
    } else if (s[i] === ')' && stack[stack.length -1] === '(' || s[i] === ']' && stack[stack.length - 1] === '[' || s[i] === '}' && stack[stack.length -1] === '{') {
        stack.pop();
    } else return false;
}
//will return a true or false by checking stack array!
return stack.length === 0;
}

console.log(isValid(str1));