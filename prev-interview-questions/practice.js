//Write a function to find the characters in the middle of the provided string.

function getMiddle(s) {
    const middleChar = Math.floor(s.length/2);

    if (s.length % 2 !== 0) {
        return s.charAt(middleChar)
    } else {
        return (s.charAt(middleChar - 1) + s.charAt(middleChar))
    }

}

console.log(getMiddle("cutie"))


//Return the sum of all the multiples of 3 and 5 below a given number.

//ex 10 => 3 + 5 + 6 + 9 => 23

function getMult(num) {
    let sum = 0;

    for (i = 3; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i
        }
    }
    return sum;
}

console.log(getMult(10))