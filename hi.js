// const stdin = (process.platform ==='linux'
// ? require('fs').readFileSync('dev/stdin').toString()
// : `
// abcabcabcabcdededededede

// `// 정답: 75
// ).trim().split('\n');
// const input = (()=>{
//     let line = 0;
//     return ()=>stdin[line++].split(" ");
// })();


const getJustData = (data, keyVal) =>{
    const justData = [];
    data.map((row, y) => row.map((col, x) =>{
        if( col === keyVal) justData.push([y,x]);
    }));
    return justData;
}
const rotate = (data) =>{
    const last = data.length;
    const result = [];
    for(let i=0; i<last; i++){
        const tmpRow = [];
        for(let j = last - 1; j >= 0; j--){
            tmpRow.push(data[j][i]);
        }
        result.push(tmpRow);
    }
    return result;
}
const getRotatedData = (originalData) =>{
    const original = originalData;
    const flipLeft = rotate(original);
    const upSideDown = rotate(flipLeft);
    const flipDouble = rotate(upSideDown);

    return [
        getJustData(original,1),
        getJustData(flipLeft, 1), 
        getJustData(upSideDown, 1), 
        getJustData(flipDouble, 1)
    ];
}

const solution = (key, lock) =>{
    const lockSize = lock.length;
    const keySize = key.length;

    const justLock = getJustData(lock, 0);
    const rotatedJustKey = getRotatedData(key);
    const lockNum = justLock.length;

    const checkDuple = {};
    justLock.forEach( v =>{
        checkDuple[v] = true;
    });

    for( let ym = 0; ym < lockSize; ym++){
        for( let xm = 0; xm < lockSize; xm++){
            for( let keyIdx = 0; keyIdx<4; keyIdx++){
                const shape = rotatedJustKey[keyIdx];
                const added = Array.from({length:4}, ()=>[]);
                shape.map(([y,x])=>{
                    if( y+ym < lockSize && x+xm < lockSize)
                        added[0].push([y+ym, x+xm]);
                    if( y+ym < lockSize && x-xm > -1)
                        added[1].push([y+ym, x-xm]);
                    if( y-ym > -1 && x+xm < lockSize)
                        added[2].push([y-ym, x+xm]);
                    if( y-ym > -1 && x-xm > -1)
                        added[3].push([y-ym, x-xm]);
                });
                for(let i=0; i<4; i++){
                    if(added[i].length === lockNum){
                        const isSame = added[i].every( val => checkDuple[val]);
                        if( isSame ){
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

const key = [
    [0, 0, 1], 
    [0, 1, 0], 
    [0, 1, 0]
];
const lock = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
const s = solution(key, lock);
console.log(s);