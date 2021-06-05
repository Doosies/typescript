const stdin = (process.platform ==='linux'
? require('fs').readFileSync('dev/stdin').toString()
: `2
6
12
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map(Number);
})();

const len = input();
const _case = Array.from(
    {length:len},
    ()=>input()
);


let arr = [1,1,1];
for(i=3; i<Math.max(..._case); i++){
    arr[i] = (arr[i-3] + arr[i-2]);
}

_case.map(val=>{
    console.log(arr[val-1]);
})
