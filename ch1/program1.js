function yell() {
    console.log(this.sound);
}

var duck = {
    duckSinging: yell,
    sound: '嘎嘎嘎'
}

var chicken = {
    duckSinging: yell,
    sound: '嘎嘎嘎'
}

var choir = [];

var joinChoir = (animal) => {
    if (animal && (animal.duckSinging === yell)) {
        choir.push(animal);
        console.log('恭喜加入合唱團');
        console.log('合唱團已有成員數量: ' + choir.length);
    }
}

joinChoir(duck);
joinChoir(chicken);

duck.duckSinging();
chicken.duckSinging();
