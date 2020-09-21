export function render(node, parent) {
    parent.appendChild(node.root)
}

export class Component {
    constructor() {
        this.props = Object.create(null)
        this.children = []
        this._root = null
    }

    get root() {
        if(this._root === null) {
            this._root = this.render()
        }
        return this._root
    }

    appendChild(child) {
        this.children.push(child)
    }

    setAttribute(attributes) {
        for(let attr in attributes) {
            this.props[attr] = attributes[attr]
        }
    }
}

export function createElement(type, attributes, ...children) {
    if(typeof type === 'string') {
        var element = new ElementWrapper(type).root
    } else {
        var element = new type()
    }

    for(let attr in attributes) {
        element.setAttribute(attr, attributes[attr])
    }

    insertChildren(children)

    return element

    function insertChildren(children) {
        children.forEach(child => {
            if(typeof child === 'string') {
                child = new TextWrapper(child).root
            } else if(Array.isArray(child)) {
                insertChildren(child)
                return
            }
            element.appendChild(child)
        });
    }
}


class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
}

class TextWrapper {
    constructor(text) {
        this.root = document.createTextNode(text)
    }
}