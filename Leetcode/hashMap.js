
var MyHashMap = function () {
  this.map = new Array(1000);
  for (let i = 0; i < 1000; i++) {
    this.map[i] = [];
  }
};


MyHashMap.prototype.hash = (key) => key % 1000;

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this.hash(key);
  const pos = this.map[hash];
  for (const i of pos) {
    if (i[0] === key) {
      i[1] = value;
      return;
    }
  }
  this.map[hash].push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this.hash(key);
  const pos = this.map[hash];
  for (const i of pos) {
    if (i[0] === key) return i[1];
  }
  return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this.hash(key);
  this.map[hash] = this.map[hash].filter((arr) => arr[0] !== key);
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */