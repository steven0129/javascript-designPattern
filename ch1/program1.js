var duck= {
    duckSinging: () => console.log('嘎嘎嘎')
}

var chicken= {
    dickSinging: () => console.log('嘎嘎嘎')
}

var choir=[];

var joinChoir=(animal) =>{
    if(animal && typeof(animal.duckSinging==='functionm')) {
        choir.push(animal)
        console.log('恭喜加入合唱團')
        console.log('合唱團已有成員數量: '+choir.length)
    }
}

joinChoir(duck)
joinChoir(chicken)