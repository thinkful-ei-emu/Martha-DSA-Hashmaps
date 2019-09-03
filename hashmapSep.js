class _Node {
  constructor(value, next){
    this.value = value; 
    this.next = next;
  }
}

class HashMapSep {
  constructor(intialCapacity = 8){
    this.length = 0;
    this._hashTable = [];
    this._capacity = intialCapacity;
    this._deleted = 0;
  }

  get(key){
    const index = this._findSlot(key);
    if(this._hashTable[index] === undefined){
      throw new Error('Key error');
    }
    return this._hashTable[index].value;
  }

  set(key, value){
    const index = this._findSlot(key);

    if(!this._hashTable[index]){
      this.length++;
    }
    this._hashTable[index] = {
      key, 
      value, 
      DELETED: false
    };
  }

  delete(key){
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if(slot === undefined){
      throw new Error('Key error');
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key){
    const hash = HashMapSep._hashString(key);
    const start = hash % this._capacity;
    console.log('hash', hash, 'start', start);
    
  //   if(slot === undefined || (slot.key === key && !slot.DELETED)){
  //     return slot;
  //   }
  //   slot = slot._Node.next;
  }

  //hash function
  static _hashString(string){
    let hash = 5381; 
    for(let i=0; i< string.length; i++){
      hash = (hash << 5)+ hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }  
}


module.exports = HashMapSep;