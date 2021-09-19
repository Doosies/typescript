const stdin: string[] = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
6
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++];//.split(" ");//.map( v => +v);
})();

class node{
    val: number;
    nextNode: node;
    constructor(n: number) {
        this.val = n;
        this.nextNode = null;
    }
}
class queue{
    len: number;
    head: node;
    tail: node;
    constructor() {
        this.len = 0;
        this.head = null;
        this.tail = null;
    };

    push(n: number) {
        const _node = new node(n);
        if (this.len === 0) {
            this.head = _node;
        } else if (this.len === 1){
            this.head.nextNode = _node;
            
        } else {
            this.tail.nextNode = _node;
        }
        this.tail = _node
        this.len ++;
    };
    pop() {
        let v: number;

        if (this.len === 0) {
            return -1;
        } else if (this.len === 1) {
            v = this.head.val;
            this.head = null;
            this.tail = null;
        } else {
            v = this.head.val;
            this.head = this.head.nextNode;
        }
        this.len --;
        return v;
    };
    size() {
        return this.len;
    };
    empty() {
        return this.len ? 0: 1;
    };
    front() {
        return this.len ? this.head.val : -1;
    };
    back() {
        return this.len ? this.tail.val : -1;
    };
}

const n = +input();
const que = new queue();

for (let i=1; i<n+1; i++) {
    que.push(i);
}

while (que.size() > 1) {
    que.pop();
    que.push(que.pop());
}

console.log(que.pop());