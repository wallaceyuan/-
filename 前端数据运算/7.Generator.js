/**
 * Created by yuan on 2018/9/21.
 */
function request(url) {//高阶函数
    return cb =>{
        setTimeout(()=>{
            cb(Math.random())
        },1000)
    }
}

create_runner(function *() {
    const val1 = yield request('some url')
    const val2 = yield request('some url')
    console.log(val1,val2)
})()

function create_runner(genFunc) {
    const it = genFunc()
    function run(data) {
        const itVal = it.next(data)
        if(!itVal.done){
            itVal.value(run)
        }
    }
    return run
}