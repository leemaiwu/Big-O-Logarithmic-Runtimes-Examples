//// O(1) Constant Time example ////

y = n

//// O(n) - Linear Time example ////

let myList = [2, 4, 6, 8, 10]
let sum = 0

for (let i = 0; i < myList.length; i++) {
  sum += myList[i]
}

//// O(n2) - Quadratic Time example ////

for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      console.log(listA[i], listB[j])
    }
  }

//// O(log n) Logarithmic Time example ////

function findNum(max) {
  let min = 0
  let target = Math.floor(Math.random() * max)
  let guess = Math.floor((max + 1) / 2)

  while (guess !== target) {
    if (guess > target) {
      max = guess - 1
    } else {
      min = guess + 1
    }
    return guess
  }
}

console.log(findNum(321))
