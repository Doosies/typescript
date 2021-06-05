const input = (process.platform === 'linux'
? require('fs').readFileSync('dev/stdin').toString()
: `4
0 1 2 3
4 0 5 6
7 1 0 2
3 4 5 0
`
).split('\n');

let n = input[0];
let board = input.slice(1,-1).map(val => val.split(" ").map( val=> +val));
// 20개일 떄 10개의 순열
const len = parseInt(n / 2);
const pool = Array.from({length:n},(v,i)=>i+1);

function getPermutation(arr, depth){
    results = []
    if( depth == 1 )
        return arr.map(val=>[val]);
    else{
        arr.forEach((fixed,idx,array)=>{
            // fixed를 제외한 값들
            let rest = [...array.splice(0,idx), ...array.splice(idx+1)];
            // rest에 대한 순열을 구함.
            let permutations = getPermutation(rest, depth-1);
            // fixed와 방금 구한 순열을 더함.
            let attached = permutations.map(permutation => [fixed, ...permutation]);
            // 구한 순열들을 results에 푸쉬
            results.push(...attached);
        });
    }
    return results;
}