/**
 * Created by yuan on 2018/9/25.
 */
//select([1,'[>5]'] =>[7,11])
const tree = require('./1.Tree')
const tree_transverse = require('./8.树的路径')

function select(tree, path) {
    if (path.length === 0)  return [tree]
    const p = path.shift()
    if(p.child){
        return select(tree.children[p.child], [...path])
    }else if(p.op) {
        return tree.children.filter(p.op)
    }
}

function select_v2(tree, path) {
    if (path.length === 0)  return [tree]
    const p = path.shift()
    if(p.child){
        return select(tree.children[p.child], [...path])
    }else if(p.op) {
        return [...tree_transverse(tree)]
            .filter(n=>p.op(n.tree))
            .map(n=>n.tree)
    }
}

function parse_selection_exp(expr) {
    return expr.split(' ')
        .map(p=>{
            if(p.match(/^\d+$/)){
                return { child:parseInt(p)}
            }else{
                return{
                    op : eval(`(x) => x.v ${p.replace(/[\[\]]/g,'')}`)
                }
            }
        })

}


//prediction
var tree_node = select(tree, [
    {child: 1},
    {op: (x)=>x.v > 5}]
)

var tree_node_v2 = select_v2(tree, [
    {child: 1},
    {op: (x)=>x.v > 5}]
)


console.log(tree_node);

console.log(tree_node_v2)