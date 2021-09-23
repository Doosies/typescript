const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" "); //.map( v => +v);
})();
class node {
    constructor(n) {
        this.val = n;
        this.nextNode = null;
        this.prevNode = null;
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
        }
        else if (this.len === 1) {
            _node.prevNode = this.head;
            this.head.nextNode = _node;
        }
        else {
            _node.prevNode = this.tail;
            this.tail.nextNode = _node;
        }
        this.tail = _node;
        this.len++;
    }
    ;
    pop() {
        let v;
        if (this.len === 0) {
            return -1;
        }
        else if (this.len === 1) {
            v = this.head.val;
            this.head = null;
            this.tail = null;
        }
        else {
            v = this.head.val;
            this.head = this.head.nextNode;
            // this.head.prevNode = null;
        }
        this.len--;
        return v;
    }
    ;
    size() {
        return this.len;
    }
    ;
    empty() {
        return this.len ? 0 : 1;
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
class deque extends queue {
    constructor() {
        super();
    }
    push_front(n) {
        const _node = new node(n);
        if (this.len === 0) {
            this.tail = _node;
        }
        else if (this.len === 1) {
            _node.nextNode = this.head;
            this.tail.prevNode = _node;
        }
        else {
            _node.nextNode = this.head;
            this.head.nextNode = this.head;
        }
        this.head = _node;
        this.len++;
    }
    ;
    push_back(n) {
        const _node = new node(n);
        if (this.len === 0) {
            this.head = _node;
        }
        else if (this.len === 1) {
            _node.prevNode = this.head;
            this.head.nextNode = _node;
        }
        else {
            _node.prevNode = this.tail;
            this.tail.nextNode = _node;
        }
        this.tail = _node;
        this.len++;
    }
    ;
    pop_front() {
        let v;
        if (this.len === 0) {
            return -1;
        }
        else if (this.len === 1) {
            v = this.head.val;
            this.head = null;
            this.tail = null;
        }
        else {
            v = this.head.val;
            this.head = this.head.nextNode;
        }
        this.len--;
        return v;
    }
    ;
    pop_back() {
        let v;
        if (this.len === 0) {
            return -1;
        }
        else if (this.len === 1) {
            v = this.tail.val;
            this.head = null;
            this.tail = null;
        }
        else {
            v = this.tail.val;
            this.tail = this.tail.prevNode;
        }
        this.len--;
        return v;
    }
}
const ord = ["push_back", "push_front"];
const C = +input();
const que = new deque();
for (let i = 0; i < C; i++) {
    const [cmd, num] = input();
    if (ord.some(v => v === cmd))
        que[cmd](+num);
    else
        console.log(que[cmd]());
}
console.log(123);
//# sourceMappingURL=hi.js.map