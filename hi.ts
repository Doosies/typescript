const stdin: string = (process.platform ==='linux'
? require('fs').readFileSync(0, 'utf-8')
// ? require('fs').readFileSync('/dev/stdin')
: `
2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face
`).trim().split('\n');
const input = (()=>{
    let line = 0;
    return ()=> stdin[line++].split(" ");//.map( v => +v);
})();

interface Clothe { [thing: string]: Array<string>;}
const c = +input();

for (let i=0; i<c; i++) {
    const kind = +input();
    const clothes: Clothe= {};
    for (let j=0; j<kind; j++) {
        const [name, what] = input();
        clothes[what] ||= [];
        clothes[what].push(name);
    }
    
    const cntArr = Object.entries(clothes).map( v => v[1].length);
    const result = cntArr.reduce((acc,curr) => acc * (curr+1),1) -1;
    console.log(result);
} 
