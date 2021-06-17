 = {};
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