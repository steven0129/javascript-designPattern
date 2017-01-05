// program2.js

const _name = Symbol('name')
const _instance = Symbol('instance')
class Singleton {
    constructor() {
        this[_name] = null
        this[_instance] = null
    }

    setName(name) {
        this[_name] = name
    }

    getName() {
        return this[_name]
    }

    getInstance() {
        if (!this[_instance]) this[_instance] = new Singleton()
        return this[_instance]
    }
}

var object = new Singleton
var instance1 = object.getInstance()
instance1.setName('steven1')

var instance2 = object.getInstance()
instance2.setName('steven2')

console.log(instance1 === instance2) // true