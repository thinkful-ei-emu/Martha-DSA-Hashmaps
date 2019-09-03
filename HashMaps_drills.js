const HashMap = require('./hashmaps');

function main(){

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  let lor = new HashMap();

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');

  lor.delete('HalfElven');
  console.log(lor);

  console.log(lor.get('Maiar'));


  console.log(lor.get('Hobbit'));

}

//console.log(main());

/**
 * When adding more than the capcity the capcity is then multiplied by 3
 * So for the above the capacity went from 8 to 24
 */

/**
  * When you have different values with the same key the values are being 
  * overwritten
  */


const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  //creates one hash table with two key value pairs
  //have the same key..
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);

  //creates a second hash table with two key value pairs
  //but the strings are set to the same as above
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1)); //20
  console.log(map1.get(str2)); //20
  console.log(map2.get(str3)); //10
  console.log(map2.get(str4)); //10
};

/**
 * creates two hashmaps, each displaying a different value for 
 * the same key..?
 * always displaying the latest value for the key
 */


/**
  * 3/ Demonstrate understanding of Hash maps

*You don't need to write code for the following two drills. 
Use any drawing app or simple pen and paper *

1) Show your hash map after the insertion of keys 
10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of 
length m = 11 using open addressing and a hash function k mod m.

k mod 11
10 mod 11 -> 1    4 mod 11 ->4        17 mod 11 -> 6
22 mod 11 -> 0    15 mod 11 -> 4      88 mod 11 -> 0
31 mod 11 -> 9    28 mod 11 -> 6      59 mod 11 ->  4

OPEN ADDRESSING:

  22    10   88        4    15   28   17   59    31
 |    |    |    |    |    |    |    |    |    |    |    | 
    0    1    2    3    4    5    6    7    8    9    10  

2) Show your hash map after the insertion of the 
keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash 
map with collisions resolved by separate chaining. 
Let the hash table have a length m = 9, and let the hash 
function be k mod m.

k mod 9

5 mod 9 ->  4   15 mod 9 -> 6   12 mod 9 -> 3                
28 mod 9 -> 1   20 mod 9 -> 2   17 mod 9 -> 8
19 mod 9 -> 1   33 mod 9 -> 6   10 mod 9 -> 1

SEPERATE CHAINING:
        10
        19                       33
        28   20   12    5        15        17
 |    |    |    |    |    |    |    |    |    |   
    0    1    2    3    4    5    6    7    8      

  */



function removeDuplicate(string){
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  let hashmap = new HashMap();
  for(let i = 0; i< string.length; i++){
    hashmap.set(string[i], string[i]);
  }
  console.log(hashmap);
}

console.log(removeDuplicate('google'));
// console.log(removeDuplicate('google all that you think can think of'));

