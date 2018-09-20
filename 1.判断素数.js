/**
 * Created by yuan on 2018/9/12.
 */
function is_prime(n) {
    if(n <=1){return false}
    const N = Math.floor(Math.sqrt(n)) //除到这个数的平方根
    let is_prime = true
    for(let i = 2;i<=N;i++){
        if( n % i === 0){
            is_prime = false
            break
        }
    }
    return is_prime
}