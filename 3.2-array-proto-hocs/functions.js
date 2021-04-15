'use strict'

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name);
}


function getCountReliableWeapons(init) {
  return weapons.filter(weapon => weapon.durability > init).length;     
} 


function hasReliableWeapons(init) {
  return weapons.some(item => item.durability > init);
}


function getReliableWeaponsNames(init) {
    return weapons.filter(weapon => weapon.durability > init).map(item => item.name);
}


function getTotalDamage() {
  return weapons.reduce((previosValue, item) => {
    return previosValue + item.attack;
  }, 0);
} 


function getValuestCountToSumValues(arr, num) {
  return arr.reduce((newObj, item) => {
  	if (num > newObj.sum) {
      newObj.count += 1;
      newObj.sum += item;
  	}
    return newObj;
  }, {count: 0,
      sum: 0,}).count;
}
