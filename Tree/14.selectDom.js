/**
 * Created by yuan on 2018/9/26.
 */
const tree = require('./11.html-Tree')
const {
    selection_expr_parse,
    findByTagName,
    findByClassName
} = require('./13.findBy')

function selectDom(node, path) {
    if(path.length === 0) return [node]
    const p = path.shift()
    if (p.className) {
        return [...findByClassName(node, p.className)].find(tree=>selectDom(tree, [...path]));
    } else if (p.tagName) {
        return [...findByTagName(node, p.tagName)].find(tree=>selectDom(tree, [...path]));
    }
}

function selectDom_v2(node, path) {
    if(path.length === 0) return [node]
    const p = path.shift()
    let nodes = []
    if (p.className) {
        nodes = findByClassName(node, p.className)
    } else if (p.tagName) {
        nodes = findByTagName(node, p.tagName)
    }
    return [].concat(
        ...nodes.map(tree=>selectDom(tree, [...path]))
    )
}

function selectEasy(tree, parse) {
    return selectDom(tree, selection_expr_parse(parse))
}
function selectEasy_v2(tree, parse) {
    return selectDom_v2(tree, selection_expr_parse(parse))
}

var dom = selectEasy(tree, '.content tr td')
console.log(dom);

var dom2 = selectEasy_v2(tree, '.content tr td')
console.log(dom2);
/*[ { className: 'content' },
 { tagName: 'tr' },
 { tagName: 'td' } ]*/
