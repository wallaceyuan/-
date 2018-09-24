/**
 * Created by yuanyuan on 2018/9/24.
 */
function tree_transverse_l(tree) {
    tree.children && tree.children.forEach(tree_transverse_l)
    console.log(tree.v)
}