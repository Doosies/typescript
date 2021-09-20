const stdin = (process.platform === 'linux'
    ? require('fs').readFileSync(0, 'utf-8')
    : `
10 35
2 5 , 5
`).trim().split('\n');
const input = (() => {
    let line = 0;
    return () => stdin[line++].split(" ").map(v => +v);
})();
// class node{
//     val: number;
//     nextNode: node;
//     constructor(n: number) {
//         this.val = n;
//         this.nextNode = null;
//     }
// }
// class queue{
//     len: number;
//     head: node;
//     tail: node;
//     constructor() {
//         this.len = 0;
//         this.head = null;
//         this.tail = null;
//     };
//     push(n: number) {
//         const _node = new node(n);
//         if (this.len === 0) {
//             this.head = _node;
//         } else if (this.len === 1){
//             this.head.nextNode = _node;
//         } else {
//             this.tail.nextNode = _node;
//         }
//         this.tail = _node
//         this.len ++;
//     };
//     pop() {
//         let v: number;
//         if (this.len === 0) {
//             return -1;
//         } else if (this.len === 1) {
//             v = this.head.val;
//             this.head = null;
//             this.tail = null;
//         } else {
//             v = this.head.val;
//             this.head = this.head.nextNode;
//         }
//         this.len --;
//         return v;
//     };
//     size() {
//         return this.len;
//     };
//     empty() {
//         return this.len ? 0: 1;
//     };
//     front() {
//         return this.len ? this.head.val : -1;
//     };
//     back() {
//         return this.len ? this.tail.val : -1;
//     };
// }
const [n, k] = input();
const arr = Array.from({ length: n }, (_, i) => i + 1);
const ans = [];
let pick = 0;
while (arr.length > (k - 1) % n) {
    pick += k - 1;
    if (pick >= arr.length)
        pick = pick % arr.length;
    //pick = pick - arr.length;
    ans.push(+arr.splice(pick, 1));
}
console.log(`<${[...ans, ...arr].join(', ')}>`);
//# sourceMappingURL=hi.js.map