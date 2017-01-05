// program2.js

const _name = Symbol('name')
const _instance = Symbol('instance')
class Singleton {
    constructor() {
        this[_name] = null
        this[_instance] = null
    }

    getName() {
        console.log(this.name)
    }

    getInstance(name) {
        if (!this[_instance]) this[_instance] = new Singleton(name)
        return this[_instance]
    }
}

var object=new Singleton
var instance1 = object.getInstance('steven1')
var instance2 = object.getInstance('steven2')

console.log(instance1 === instance2) // true