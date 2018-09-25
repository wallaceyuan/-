/**
 * Created by yuanyuan on 2018/9/24.
 */
//使用Generator函数可以将遍历操作变成一个数组结构
/*
const nodes = [...tree_transverse(tree)]
//或

for (let node of tree) {

}
*/

function* tree_transverse(tree, ord = 0) {
    let transversed = false
    if (!tree.children) {
        yield tree
        return
    }
    for (let i = 0; i < tree.children.length; i++) {
        if (i === ord) {
            transversed = true
            yield tree
        }
        yield *tree_transverse(tree.children[i], ord)

    }
    if (!transversed) {
        yield tree
    }
}


module.exports = tree_transverse