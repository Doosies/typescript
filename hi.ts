const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
25 12
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ").map( v => +v);
})();

// 2와 5의 갯수를 구함
// 여기서 n은 n!을 의미함
function calc(n: number) {
    let five = 0;
    let two = 0;

    for (let i = 2; i <= n; i *= 2) 
        two += Math.floor(n / i);
    for (let i = 5; i <= n; i *= 5)
        five += Math.floor(n / i);

    return [two, five];
}

const [M, N] = input();
const m = calc(M);
const n = calc(N);
const mn = calc(M-N);

const two = m[0] - (n[0] + mn[0]);
const five = m[1] - (n[1] + mn[1]);

console.log(Math.min(two, five));