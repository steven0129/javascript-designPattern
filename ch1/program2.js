var makeSound = (animal) => {
    if (animal instanceof Duck) console.log('嘎嘎嘎')
    else if (animal instanceof Chicken) console.log('顆顆顆')
}

var Duck = function() { }
var Chicken = function() { }

// 如果改成以下程式似乎不能執行.....
// var Duck=()=>{}
// var Chicken=()=>{}

makeSound(new Duck())
makeSound(new Chicken())