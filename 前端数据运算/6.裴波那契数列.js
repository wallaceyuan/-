/**
 * Created by yuan on 2018/9/21.
 */
function* fibonacci() {
    let a = 1, b = 1
    yield a;
    yield b;
    while (true) {
        const t = b
        b = a + b;
        a = t;
        yield b
    }
}

const it = fibonacci()
const fab10 = Array.from(Array(10),it.next,it).map(x=>x.value)
console.log(fab10);