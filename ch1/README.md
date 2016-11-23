# 物件導向的的javascript

## 鴨子的範例(來源：書本P.4)

![鴨子的範例(來源：書本P.4)](./duck_story.jpg)

將以上例子以程式碼來呈現

    var duck= {
        duckSinging: () => console.log('嘎嘎嘎')
    }

    var chicken= {
        dickSinging: () => console.log('嘎嘎嘎')
    }

    var choir=[]; //合唱團

    var joinChoir=(animal) =>{
        if(animal && typeof(animal.duckSinging==='function')) {
            choir.push(animal)
            console.log('恭喜加入合唱團')
            console.log('合唱團已有成員數量: '+choir.length)
        }
    }

    joinChoir(duck)
    joinChoir(chicken)

以node執行

    node program1.js

出現以下結果

    恭喜加入合唱團
    合唱團已有成員數量: 1
    恭喜加入合唱團
    合唱團已有成員數量: 2

我們可以發現，在joinChoir我們不需要去檢查animal是"哪一種"，只需要去檢查animal有沒有duckSinging方法。
這就是物件導向的概念，在設計模式的事件中，這叫做"介面導向設計"，是為設計模式的重要思想。

## 多態(來源：書本P.6)

![多態(來源：書本P.6)](./polymorphism.jpg)

將以上例子以程式碼呈現

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

以node執行

    node program2.js

出現以下結果

    嘎嘎嘎
    顆顆顆

以上程式碼體現程式的多態性，但只要輸入參數有不同種就必須更動makeSound函式。
因此正確的作法應是"不動的部分固定，變動的訊息切開"，以program3.js為例

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