type inputType = () => number[];

const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
8
1 8
3 9
2 2
4 1
6 4
10 10
9 7
7 6
`).trim().split('\n');
const input: inputType = (()=>{
    let line = 0;
    return () => stdin[line++].split(" ").map((v:string) => Number(v));
})();

function getMinus(arr: string[]): number {
    return Number(arr[0]) - Number(arr[1]);
}

const n: number = Number(input());
const arr: number[][] = Array.from({length:n}, ()=> input());
const dp: number[] = [];

arr.sort((a: number[], b: number[]): number => a[0] - b[0]);

for (let i=0; i<n; i++) {
    dp[i] = 1;
    for (let j=0; j<i; j++) {
        if (arr[i][1] > arr[j][1] ) {
            dp[i] = Math.max( dp[i], dp[j] + 1);
        }
    }
}
const result: number = Math.max(...dp);
console.log(n - result);

// const stdin = (process.platform ==='linux'
// ? require('fs').readFileSync('dev/stdin').toString()
// : `
// 8
// 8 2 9 1 4 6 7 10
// `
// ).trim().split('\n');
// const input = (()=>{
//     let line = 0;
//     return ()=>stdin[line++].split(" ");
// })();


// const n = Number(input());
// const arr = input().map(v => Number(v));
// const dp = [1];

// for(let i=1, l=arr.length; i<l; i++){
//     dp[i] = 1;
//     for( let j=i; j>=0; j--){
//         if( arr[j] > arr[i] && dp[j] >= dp[i] ){
//             dp[i] = dp[j] +1;
//         }
//     }
// }

// console.log(dp);
// console.log(dp[n-1]);