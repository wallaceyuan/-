/**
 * Created by yuan on 2018/9/25.
 */
//select([1,'[>5]'] =>[7,11])


const tree = require('./1.Tree')

function find_by_path(tree,path) {
    path[0] == 0?tree[0]:find_by_path(tree[path[0]],)
}
//prediction


find_by_path(tree,[1,(x)=>x.v>5])