const _name = Symbol('name')
class Singleton {
    constructor() {
        this[_name] = null
    }

    setName(name) {
        this[_name] = name
    }

    getName() {
        return this[_name]
    }
}

var instance1 = new Singleton()
instance1.setName('steven1')

var instance2 = new Singleton()
instance2.setName('steven2')

console.log(instance1 === instance2) // false