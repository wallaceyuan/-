/**
 * Created by yuanyuan on 2018/9/24.
 */
class Tree {
    constructor(v, children) {
        this.v = v
        this.children = children || null
    }
}

const tree = new Tree(10, [
    new Tree(5),
    new Tree(3, [new Tree(7), new Tree(11)]),
    new Tree(2)
])

module.exports = tree
