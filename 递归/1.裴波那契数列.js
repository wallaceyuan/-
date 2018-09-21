/**
 * Created by yuan on 2018/9/21.
 */
/*
function fibonacci(n) {
 return n === 1 || n === 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}
*/


/*function fibonacci(n) {
    let [a,b] = [0, 1]
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b]
    }
    return a
}*/


function fibonacci(n) {
    return Array(n).fill().reduce(([a,b])=>{
        return [b,a+b]
    },[0,1])[1]
}

console.log(fibonacci(5));