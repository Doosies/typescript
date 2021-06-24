const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `
4
2 4 3 1
`
).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ");
})();


const n = Number(input());
const arr = input().map(v => Number(v));
const dp = [];
let maxDp = -1;

const insertSort = (inputList) =>{
    const len = dp.length;
    const [inputNum, inputDp] = inputList;
    for(let i=0; i<len; i++){

        if( dp[i][1] <= inputDp){
            dp.splice(i,0,inputList);
            return;
        }
    }
    dp.push(inputList);
}
const findDP = (num) =>{
    const len = dp.length;
    for(let i=0; i<len; i++){
        // dp의 숫자가 num보다 크다면
        if( dp[i][0] > num){
            // dp에 1을 더해서 리턴
            return [num, dp[i][1]+1];
        }
    }
    return [num, 1];
}

for( let i=0; i<n; i++){
    // 현재 숫자의 dp를 얻어옴
    let tmpDp = findDP(arr[i]);
    insertSort(tmpDp);
    // console.log("!!");
}
console.log(dp);
console.log(dp[0][1]);