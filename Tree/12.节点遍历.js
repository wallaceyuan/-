/**
 * Created by yuan on 2018/9/25.
 */
function* transverse(node) {
    yield node
    if (node.children) {
        for (let i = 0; i < node.children.length; i++) {
            yield *transverse(node.children[i])
        }
    }
}

module.exports = transverse