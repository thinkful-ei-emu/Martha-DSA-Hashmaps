class HashMap {
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

  //dealing with collisions using open addressing
  set(key, value){
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    //if there isn't enough space(capacity then resize)
    if(loadRatio > HashMap.MAX_LOAD_RATIO){
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);

    //if empty then increase length??
    if(!this._hashTable[index]){
      this.length++;
    }
    //assigning key value to slot
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
    const hash = HashMap._hashString(key);
    //start is where you are looking at...not the beginning
    const start = hash % this._capacity;

    for(let i = start; i < start + this._capacity; i++){
      //lets it wrap around
      const index = i % this._capacity; 
      const slot = this._hashTable[index];
      //checking to see if the slot is open
      if(slot === undefined || (slot.key === key && !slot.DELETED)){
        //returns the first open
        return index;
      }
    }
  }

  _resize(size){
    const oldSlots = this._hashTable;
    this._capacity = size;
    //Reset the length - it gets rebuild as you add items back
    this.length = 0; 
    this._deleted = 0;
    this._hashTable = [];
    
    for( const slot of oldSlots){
      if(slot !== undefined && !slot.DELETED){
        this.set(slot.key, slot.value);
      }
    }
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


module.exports = HashMap;