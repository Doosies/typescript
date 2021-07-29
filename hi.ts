const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
55 8
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

const [n, k]: number[] = input();
let result: number[][] = Array.from({length:n+1}, ()=>[1]);

for (let i=0; i<= n; i++) {
    for (let j=0; j<=i; j++) {
        if (j===0 || j===i) result[i][j] = 1;
        else result[i][j] = (result[i-1][j-1]% 10007 + result[i-1][j]% 10007)%10007;
    }
}

console.log(result[n][k] % 10007);