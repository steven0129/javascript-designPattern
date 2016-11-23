var makeSound = (animal) => {
    animal.sound()
}

var Duck = function() { }
Duck.prototype.sound=() => console.log('嘎嘎嘎')

var Chicken = function() { }
Chicken.prototype.sound=() => console.log('顆顆顆')

var Dog = function() { }
Dog.prototype.sound=() => console.log('旺旺旺')

makeSound(new Duck())
makeSound(new Chicken())
// makeSound(new Dog())