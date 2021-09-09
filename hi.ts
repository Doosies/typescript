const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
14
push 1
push 2
top
size
empty
pop
pop
pop
size
empty
pop
push 3
empty
top
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ");//.map( v => +v);
})();

const C = +input();
const stack: string[] = [];
let result = '';
let size = 0;

const cmdObj = {
    push: (n: string) => {stack[size]=n; size++;},
    pop: () => {
        if (size) {
            size --;
            return stack.splice(-1).toString();
        }else return -1;
    },
    size: () => size,
    empty: () => !size ? 1 : 0,
    top: () => size ? stack[size-1] : -1,
};

for (let i=0; i<C; i++) {
    const [cmd, num] = input();
    if (cmd === "push") cmdObj.push(num);
    else result += `${(cmdObj[cmd]())}\n`;
}
console.log(result);