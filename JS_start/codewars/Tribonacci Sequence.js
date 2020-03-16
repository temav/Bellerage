function tribonacci(signature,n){
    let array = signature.slice(0, n);
    let k = 3;
    while(n > 3) {
        array.push(array[k-1]+array[k-2]+array[k-3])
        --n;
        ++k;
    }
    return array;
}