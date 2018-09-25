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

/*[ { tree: Tree { v: 10, children: [Array] }, path: [] },
{ tree: Tree { v: 5, children: null }, path: [ 0 ] },
{ tree: Tree { v: 3, children: [Array] }, path: [ 1 ] },
{ tree: Tree { v: 7, children: null }, path: [ 1, 0 ] },
{ tree: Tree { v: 11, children: null }, path: [ 1, 1 ] },
{ tree: Tree { v: 2, children: null }, path: [ 2 ] } ]*/

//console.log([...tree_transverse(tree)]);

module.exports = tree_transverse