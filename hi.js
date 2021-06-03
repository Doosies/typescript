var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var numbers = parseElements(input[1].split(' '));
var operatorsCount = parseElements(input[2].split(' '));

var min = Infinity, max = -Infinity;

function findPermutation(idx, operatorsCount, sum) {  
  if (idx === numbers.length) {
    max = Math.max(max, sum);
    min = Math.min(min, sum);
    return;
  }
  
  for (var i = 0; i < 4; i++) {
    if (operatorsCount[i] === 0) continue;
    var count = operatorsCount.slice();
    count[i]--;
    findPermutation(idx+1, count, cal(sum, numbers[idx], i)); 
  }
}

findPermutation(1, operatorsCount, numbers[0]);

console.log(max);
console.log(min);

function cal (a, b, op) {
  
  if (op === 0) {
    return a+b;
  } else if (op === 1) {
    return a-b;
  } else if (op === 2) {
    return a*b;
  } else {
    return (a/b) < 0 ? (abs(a) < abs(b) ? abs(Math.ceil(a/b)) : Math.ceil(a/b)): Math.floor(a/b);
  }
}

function abs(n) {
  return Math.abs(n);
}
function parseElements(arr) {
  return arr.map(function (v) {
    return parseInt(v);
  });
}
