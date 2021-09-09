const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `

`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ").map( v => +v);
})();

const C = +input();
const stack: number[] = [];

for (let i=0; i<C; i++) {
    const num = +input();
    if (num === 0) stack.pop();
    else stack.push(num);
}
const result = stack.reduce((acc,curr)=>acc+curr,0);
console.log(result);
