/**
 * Created by yuanyuan on 2018/9/24.
 */
function tree_transverse_m(tree,ord = 0) {
    let transversed = false
    if(!tree.children){
        console.log(tree.v)
        return
    }
    tree.children.forEach((child,i)=>{
        if(i === ord){
            transversed = true
            console.log(tree.v)
        }
        tree_transverse_m(child,ord)
    })
    !transversed && console.log(tree.v)
}

tree_transverse_m(tree,0)

tree_transverse_m(tree,3)

tree_transverse_m(tree,1)