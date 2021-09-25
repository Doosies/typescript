const stdin: string[] = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
: `
1
RDD
15
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++];//.split(" ");//.map( v => +v);
})();

class node{
    val: number;
    nextNode: node;
    prevNode: node;
    constructor(n: number) {
        this.val = n;
        this.nextNode = null;
        this.prevNode = null;
    }
}
class deque {
    len: number;
    head: node;
    tail: node;
    constructor() {
        this.len = 0;
        this.head = null;
        this.tail = null;
    };
    push_front(n: number) {
        const _node = new node(n);
        if (this.len === 0) {
            this.tail = _node;
        } else if (this.len === 1){
            _node.nextNode = this.head;
            this.tail.prevNode = _node;
        } else {
            _node.nextNode = this.head;
            this.head.prevNode = _node;
        }
        this.head = _node;
        this.len ++;
    };
    push_back(n: number) {
        const _node = new node(n);
        if (this.len === 0) {
            this.head = _node;
        } else if (this.len === 1){
            _node.prevNode = this.head;
            this.head.nextNode = _node;
            
        } else {
            _node.prevNode = this.tail;
            this.tail.nextNode = _node;
        }
        this.tail = _node
        this.len ++;
    };
    pop_front() {
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
    pop_back() {
        let v: number;

        if (this.len === 0) {
            return -1;
        } else if (this.len === 1) {
            v = this.tail.val;
            this.head = null;
            this.tail = null;
        } else {
            v = this.tail.val;
            this.tail = this.tail.prevNode;
        }
        this.len --;
        return v;
    }
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


const C = +input();
const ans: any[] = [];

for (let i=0; i<C; i++) {
    const ord = input().split("");
    const len = +input();
    const d = new deque();

    let isError = false;
    let isR = false;
    let arr = input().replace("[","").replace("]","").split(",").map(v=>+v);
    arr = len === 0 ? [] : arr;
    arr.forEach( v=> d.push_back(v));
    
    ord.forEach( cmd => {
        if (cmd === 'R') { 
            isR = !isR;
        } else if (cmd === 'D') {
            if (d.size() > 0){
                if (isR) 
                d.pop_back();
                else 
                d.pop_front();
            }
            else
                isError = true;
        }
    });

    if (isError) ans.push("error");
    else {
        const tmp: number[] = [];
        while(!d.empty()) {
            tmp.push(d.pop_front());
        }
        if (isR) ans.push(`[${tmp.reverse()}]`);
        else ans.push(`[${tmp}]`);
        
    }
}

console.log(ans.join('\n'));