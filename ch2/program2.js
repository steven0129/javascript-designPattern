class Singleton {
    constructor(name) {
        this.name = name
        this.instance = null
    }

    getName() {
        console.log(this.name)
    }

    getInstance(name) {
        if (!this.instance) this.instance = new Singleton(name)
        return this.instance
    }
}

var object=new Singleton
var a = object.getInstance('sven1')
var b = object.getInstance('sven2')

console.log(a === b) // true