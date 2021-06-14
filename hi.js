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

const isCorrectChar = (str) =>{
    let cnt = 0;
    for(c of str){
        if( c === '(' ) cnt ++;
        else cnt --;
        if( cnt < 0) return false;
    }
    return cnt === 0 ? true : false;
}
const isBalancedChar = (str) =>{
    let cnt = 0;
    for(c of str){
        if( c === '(' ) cnt ++;
        else cnt --;
    }
    return cnt === 0 ? true : false;
}
const getUV = (str) =>{
    let stackStr = '';
    for( let i=0; i<str.length; i++){
        stackStr += str[i];
        if( isBalancedChar(stackStr)){
            return [stackStr, str.slice(i+1, str.length)];
        }
    }
}
const getReverse = (str) =>{
    let reversed = '';
    for(let c of str){
        if( c === '(') reversed += ')';
        else reversed += '(';
    }
    return reversed;
}
const solution = (p) =>{
    if( p == '' ) return '';
    let [u, v] = getUV(p);
    // 문자열 u가 올바른 괄호 문자열이라면
    if( isCorrectChar(u) ){
        return u + solution(v);
    // 문자열 u가 올바른 괄호 문자열이 아니라면
    }else{
        let str = '(';
        str += solution(v);
        str += ')';
        str += getReverse(u.slice(1,u.length-1));
        return str;
    }
}

const str = '()))((()';
const s = solution(str);
console.log(s);