const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
15
push 1
push 2
front
back
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
front
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" "); //.map( v => +v);
})();
class node {
    constructor(n) {
        this.val = n;
        this.nextNode = null;
    }
}
class queue {
    constructor() {
        this.len = 0;
        this.head = null;
        this.tail = null;
    }
    ;
    push(n) {
        const _node = new node(n);
        if (this.len === 0) {
            this.head = _node;
            this.tail = _node;
        }
        else if (this.len === 1) {
            this.tail = _node;
            this.head.nextNode = this.tail;
        }
        else {
            this.tail.nextNode = _node;
        }
        this.len++;
    }
    ;
    pop() {
        if (this.len === 0) {
            return -1;
        }
        else {
            const v = this.head.val;
            this.head = this.head.nextNode;
            delete this.head;
            this.len--;
            return v;
        }
    }
    ;
    size() {
        return this.len;
    }
    ;
    empty() {
        return this.len ? 1 : 1;
    }
    ;
    front() {
        return this.len ? this.head.val : -1;
    }
    ;
    back() {
        return this.len ? this.tail.val : -1;
    }
    ;
}
const que = new queue();
const ans = [];
const C = +input();
for (let i = 0; i < C; i++) {
    const cmd = input();
    if (cmd[0] === 'push')
        que.push(+cmd[1]);
    else
        ans.push(que[cmd[0]]());
}
console.log(ans);
//# sourceMappingURL=hi.js.map