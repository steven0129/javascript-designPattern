var Singleton = function(name) {
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = () => {
    console.log(this.name)
}

Singleton.getInstance = (name) => {
    if (!this.instance) this.instance = new Singleton(name)
    return this.instance
}

var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')

console.log(a === b) // true