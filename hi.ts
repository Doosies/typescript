const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
3
6
34
38
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

function GCDs(num: number[]): number {
    const len = num.length;

    for (let i=0; i<len-1; i++) {
        let a = num[i];
        let b = num[i+1];
        while (b) {
            [a, b] = [b, a%b];
        }
        num[i+1] = a;
    }
    return num[len-1];
}
function commonFactor(n: number): number[] {
    const arr: number[] = [];

    for (let i=1; i<=n**0.5; i++) {
        if (i * i === n) arr.push(i);
        else if (n % i === 0) arr.push( i, n/i);
    }
    if (arr[0] === 1) arr.splice(0,1);
    return arr;
}

const N: number = +input();
const arr: number[] = Array.from({length:N}, ()=>+input());
const rstArr: number[] = [];
arr.sort((a,b) => a-b);

for (let i=1; i<N; i++) {
    rstArr[i-1] = arr[i] - arr[i-1];
}
const result = commonFactor(GCDs(rstArr));
result.sort((a,b) => a-b);
console.log(result.join(" "));