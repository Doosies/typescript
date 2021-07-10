const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
4
300 1 1 300
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=>stdin[line++].split(" ").map((v:string) => +v);
})();

function gcd(a: number, b: number): number {
    return b ? gcd(b, a%b) : a;
}

const N: number = +input();
const arr: number[] = input();

for (let i=1; i<N; i++) {
    const g = gcd(arr[0], arr[i]);
    console.log(`${arr[0]/g}/${arr[i]/g}`);
}