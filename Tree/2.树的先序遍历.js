/**
 * Created by yuanyuan on 2018/9/24.
 */

const tree = require('./1.Tree')

function tree_transverse(tree) {
    console.log(tree.v)
    tree.children && tree.children.forEach(tree_transverse)
}

tree_transverse(tree)