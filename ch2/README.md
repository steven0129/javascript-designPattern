# 魔鬼藏在細節中：創建者模式

## 創建型模式(Creational pattern)

定義：將系統與它的物件建立、結合、表示的方式分離。這些設計模式在物件建立的類型、主體、方式、時間等方面提高了系統的靈活性。(來源：https://zh.wikipedia.org/wiki/創建型模式)

如果你有以下症狀可以使用創建者模式

1. 一個系統需要和它的物件和產品的建立相互獨立
2. 一組相關的物件被設計為一起使用
3. 隱藏一個類別的具體實作，僅暴露它們的介面
4. 一個類別只能有一個實例，而且這個實例能在任何時候存取到
5. 實例應該能在不修改的情況下具有可延伸性
6. 一個類別希望它的子類別實作它所建立的物件
7. 類別的實例化在執行時才指定

在Design Patterns: Elements of Reusable Object-Oriented Software一書中將創建者模式分為五種：

1. 抽象工廠模式(Abstract factory pattern)
2. 創建者模式(Builder pattern)
3. 工廠方法模式(Factory method pattern)
4. 原型模式(Prototyoe pattern)
5. 單例模式(Singleton pattern)

## 單例模式(Singleton pattern)

### 惰性單例(懶漢模式)(Lazy Initialization)

單例模式的核心在於確保類別中只能有一個實例(instance)跟一個全域存取點(access of point)

過去我們在處理javascirpt僅能宣告全域變數的性質時常需要耗費許多腦力在此模式身上，
但是現在我們有了強大的ES6當作武器(而且未來可能完全進化成ES7)，
就不需要浪費時間在一些閉包(closure)以及一些命名空間(namespace)身上

單例模式後來出現了許多變形，在此僅介紹最常用的懶漢模式，
其他則留待各位大大補充

懶漢模式的精神在於實例留到第一次被使用時才建構，就像下面這個程式碼

```javascript
// program1.js

var Singleton = function(name) {
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = () => {
    alert(this.name)
}

Singleton.getInstance = (name) => {
    if (!this.instance) this.instance = new Singleton(name)
    return this.instance
}

var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')

console.log(a === b) // true
```

或者我們使用ES6

```javascript
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
```
在Singleton類別裡一開始並沒有賦予_name這個private的變數任何值，
直到第一次使用setName時才賦值給_name

另外值得注意的是這裡利用Symbol的唯一性來達到私有變數(private variable)的效果，
不同於以往利用閉包(closure)的方式，
ps. Symbol的定義：A symbol is a unique and immutable data type. 
It may be used as an identifier for object properties. 
The Symbol object is an implicit object wrapper for the symbol primitive data type
(來源：https://goo.gl/9Vkn0I)

program2與program3做比較可以發現一般的實例化是無法阻止多個實例的產生

```javascript
// program3.js

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
```