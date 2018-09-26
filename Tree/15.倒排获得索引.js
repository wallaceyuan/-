/**
 * Created by yuan on 2018/9/26.
 */
function index(tree) {
    const classes = {}
    const nodes = [...transverse(tree)]
    nodes.forEach(node=>{
        if(node.className){
            if(!classes[node.className]){
                classes[node.className] = []
            }
            classes[node.className].push(node)
        }
    })
    return classes
}

