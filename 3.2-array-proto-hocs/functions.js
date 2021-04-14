'use strict'

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name);
}

function getCountReliableWeapons(init) {
  return weapons.reduce((previosValue, item) => {
    if (item.durability > init) {
      previosValue++;
    }
    return previosValue;
  }, 0);
} 

function hasReliableWeapons(init) {
  return weapons.some(item => item.durability > init);
}

function getReliableWeaponsNames(init) {
    return weapons.map((item) => {
    if (item.durability > init) { 
  	return item.name;
    }
  }).filter(item => item !== undefined);
}

function getTotalDamage() {
  return weapons.reduce((previosValue, item) => {
    previosValue = previosValue + item.initDurability - item.durability; 
    return previosValue;
  }, 0);
} 

function getValuestCountToSumValues(arr, num) {
  let count = 0;
  return arr.reduce((previosValue, item) => {
    count += item;
  	if (num >= count) {
  		previosValue++
  	}
    return previosValue;
  }, 0);
}
