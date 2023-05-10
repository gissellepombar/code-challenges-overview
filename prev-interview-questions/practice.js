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


//Write a function that receives two strings and returns the number of characters we would need to rotate the first string forward to match the second.
function shiftedDiff(first, second) {
    if (first.length !== second.length) {
      return -1;
    }
    const rotatedStrings = first + first;
    for (let i = 0; i < first.length; i++) {
      let match = true;
      for (let j = 0; j < second.length; j++) {
        if (rotatedStrings[i + j] !== second[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    }
    return -1;
  }

  console.log(shiftedDiff("gym", "ymg"))

  //notes: need to go through i (outer loop) first and once the index value charater for that string matches then you iterate through j (innner loop)