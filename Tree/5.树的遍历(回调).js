/**
 * Created by yuanyuan on 2018/9/24.
 */
function tree_transverse_m(tree,ord = 0,callback) {
    let transversed = false
    if(!tree.children){
        callback(tree.v)
        return
    }
    tree.children.forEach((child,i)=>{
        if(i === ord){
            transversed = true
            callback(tree.v)
        }
        tree_transverse_m(child,ord)
    })
    !transversed && callback(tree.v)
}

tree_transverse_m(tree,0)

tree_transverse_m(tree,3)

tree_transverse_m(tree,1)