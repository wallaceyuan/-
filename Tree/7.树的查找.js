/**
 * Created by yuan on 2018/9/25.
 */

const tree = require('./1.Tree')
const tree_transverse = require('./6.树的遍历(Generator)')

function find_node(tree,prediction) {
    return [...tree_transverse(tree)].find(prediction)
}

/*function find_node(tree,prediction) {
    for(let node of tree_transverse(tree)){
        if(prediction(node)){return node}
    }
}*/


console.log(find_node(tree, node=>node.v === 2));