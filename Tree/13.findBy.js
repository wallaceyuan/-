/**
 * Created by yuan on 2018/9/25.
 */
const transverse = require('./12.节点遍历')
const tree = require('./11.html-Tree')

function findByClassName(node, className) {
    return [...transverse(node)].filter(node => node.className == className)
}

function findByTagName(node, tagName) {
    return [...transverse(node)].filter(node => node.tag = tagName)
}

function selection_expr_parse(expr) {
    return expr.split(' ')
        .map(x=> {
            if (x[0] === '.') {
                return {className: x.substr(1)}
            } else {
                return {tagName: x}
            }
        })
}

/*console.log(findByClassName(tree, 'content'));

console.log(findByTagName(tree, 'tr'));*/

module.exports = {
    selection_expr_parse,
    findByTagName,
    findByClassName
}


