'use strict'

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(weapons) {
  return weapons.map(item => item.name);
}

// не понимаю, как правильно передать массив оружия в функции

function getCountReliableWeapons(weapons, init) {
  return weapons.reduce(function (previosValue, item){
    if (item.durability > init) {
      previosValue++;
    }
    return previosValue;
  }, 0);
} 

function hasReliableWeapons(weapons, init) {
  return weapons.some(item => item.durability > init);
}

function getReliableWeaponsNames(weapons, init) {
    return weapons.map(function(item) {
    if (item.durability > init) { 
  	return item.name;
    }
  }).filter(item => item !== undefined);
}

function getTotalDamage(weapons) {
  return weapons.reduce(function (previosValue, item){
    previosValue = previosValue + item.initDurability - item.durability; 
    return previosValue;
  }, 0);
} 

function bonus(arr, num) {
  let count = 0;
  return arr.reduce(function(previosValue, item){
    count += item;
  	if (num >= count) {
  		previosValue++
  	}
    return previosValue;
  }, 0);
}
