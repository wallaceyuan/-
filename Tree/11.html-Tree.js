/**
 * Created by yuan on 2018/9/25.
 */

class DOMTree{
    constructor(tag,className,children = []){
        this.tag = tag
        this.className = className
        this.children = children
    }
}
const tree = new DOMTree('div','',[
    new DOMTree('div','content',[
        new DOMTree('table','',[
            new DOMTree('tr','',[
                new DOMTree('td','',[
                    new DOMTree('text','',null,'1')
                ]),
                new DOMTree('td','',[
                    new DOMTree('text','',null,'2')
                ]),
                new DOMTree('td','',[
                    new DOMTree('text','',null,'2')
                ]),
            ])
        ])
    ])
])


module.exports = tree