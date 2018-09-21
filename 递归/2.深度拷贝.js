/**
 * Created by yuan on 2018/9/21.
 */
function clone(obj) {
    if(obj == null || typeof obj !== 'object') return obj
    const newObj = new obj.constructor()
    for(let key in Object.getOwnPropertyDescriptor(obj)){
        newObj[key] = clone(obj[key])
    }
    return newObj
}