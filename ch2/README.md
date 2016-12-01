# 魔鬼藏在細節中：創建者模式

## 創建者模式(Creational pattern)

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

### 一個基本的單例模式

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

alert(a === b) // true
```

或者我們使用ES6

```javascript
// program2.js

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
```