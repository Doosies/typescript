const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
3
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ");//.map( v => +v);
})();

const num = +input();
const result = Math.floor(num/125) + Math.floor(num/25) + Math.floor(num/5);
console.log(result);