/**
 * Created by yuanyuan on 2018/9/24.
 */
function deepCompare(a,b) {
    if(a === null || typeof a!== 'object' || b === null || typeof b!== 'object'){
        return a === b
    }

    const propsA = Object.getOwnPropertyDescriptors(a)
    const propsB = Object.getOwnPropertyDescriptors(b)


    if(Object.keys(propsA).length !== Object.keys(propsB).length){
        return false
    }
    return Object.keys(propsA).every(key=>{
        deepCompare(a[key],b[key])
    })
}


console.log(deepCompare({a: 1, b: 2, c: {A: 3, B: 4}}, {a: 1, b: 2, c: {A: 5, B: 6}}));