const stdin: string[] = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
20
5 4 6 9 8 41 3 2 1 5 4 7 5 52 4 5 5 4 5 45
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ").map( v => +v);
})();

const C = +input();
const arr = input();
const stack: number[] = [];
let cnt = 0;

for (let i=0; i<C; i++) {
    while (stack.length  && arr[i] > arr[stack[stack.length-1]]) {
        arr[stack.pop()] = arr[i];
    }
    stack.push(i);
}
while (stack.length) {
    arr[stack.pop()] =-1;
}

console.log(arr.join(" "));