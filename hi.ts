const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
1
))                           
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split("");//.map( v => +v);
})();

function isPassed(str: string[]): boolean {
    const size = str.length;
    const stack = [];

    for (let i=0; i<size; i++) {
        if (str[i] === '(' ) 
            stack.push(1);
        else if (!stack.pop()) 
            return false;
    }
    if (stack.length === 0) return true;
    else return false;
}

const C = +input();
for (let i=0; i<C; i++) {
    console.log(isPassed(input()) ? 'YES' : 'NO');
}
