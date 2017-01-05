// program1.js

var Singleton = function() {
    this.name = null
    this.instance = null
}

Singleton.prototype.setName = (name) => {
    this.name = name
}

Singleton.prototype.getName = () => {
    alert(this.name)
}

Singleton.getInstance = () => {
    if (!this.instance) this.instance = new Singleton()
    return this.instance
}

var a = Singleton.getInstance()
a.setName('steven1')

var b = Singleton.getInstance()
b.setName('steven2')

console.log(a === b) // true