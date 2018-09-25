/**
 * Created by yuan on 2018/9/25.
 */

/*构造一个先序遍历,除了返回节点外,还返回路径*/
const tree = require('./1.Tree')

function* tree_transverse(tree,path = []) {
    yield {tree,path}
    if(tree.children){
        for(let i = 0;i<tree.children.length;i++){
            yield *tree_transverse(tree.children[i],[...path,i])
        }
    }
}

console.log([...tree_transverse(tree)]);