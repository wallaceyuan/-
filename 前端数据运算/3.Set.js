/**
 * Created by yuan on 2018/9/20.
 */
new Set()
// add()  has()  delete() values()
//数组去重
//console.log([...new Set(['a', 'b', 'a', 'c', 'f'])]) //[ 'a', 'b', 'c', 'f' ]

console.log(solve([3, 5, 8], 13));  //true
console.log(solve([3, 9], 15));  //false
console.log(solve([7, 8, 2], 7));  //true
console.log(solve([1, 2, 3], 6));  //true

function solve(arr, N) {
    const s = new Set();
    for (var i = 0; i <= arr.length; i++) {
        for (var j = i + 1; j <= arr.length; j++) {
            const remain = arr.slice(i, j).reduce((x, y)=>x + y, 0) % N
            s.add(remain)
        }
    }
    return s.has(0)
}