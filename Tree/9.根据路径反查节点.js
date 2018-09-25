/**
 * Created by yuan on 2018/9/25.
 */

const tree = require('./1.Tree')

function find_by_path(tree,path) {
    return path.length === 0?tree:find_by_path(tree.children[path[0]],path.slice(1))
}


console.log(find_by_path(tree, [1, 1]));