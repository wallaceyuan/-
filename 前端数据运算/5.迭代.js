/**
 * Created by yuan on 2018/9/21.
 */
const s = new Set([1, 2, 3, 4, 5])

const it = s.values()
console.log(it)
console.log(...it)


let val = null
while (!(val = it.next()).done) {
    console.log(val)
}

const it3 = s.values();
const arr = Array.from(Array(5),it3.next,it3).map(x=>x.value)
console.log(arr)