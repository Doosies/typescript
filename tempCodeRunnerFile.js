unction(a, b, c){
    if(a <= 0 || b <= 0 || c <= 0){
        // w(a,b,c);
        return 1;
    }else if(a > 20 || b > 20 || c > 20){
        w(20,20,20);
    }else if(a < b && b < c){
        w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
    }else{
        return  w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
    }

};

while(true){
    let [a,b,c] = input();
    if(a == -1 && b == -1 && c == -1) break; 
    console.log(w(a,b,c));
}
