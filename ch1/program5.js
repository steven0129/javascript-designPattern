var obj = { name: 'sven' }
var A = function () { }
A.prototype = obj

var a = new A()
console.log(a.name)