var MyHashSet = function () {
  this.set = new Array(1000);
  for (let i = 0; i < 1000; i++) {
    this.set[i] = new Array();
  }
};

MyHashSet.prototype.hash = function (key) {
  return key % 1000;
}

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function (key) {
  this.set[this.hash(key)].push(key);
};

/**
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function (key) {
  this.set[this.hash(key)] = this.set[this.hash(key)].filter(num => num !== key);
};

/**
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function (key) {
  return this.set[this.hash(key)].includes(key);
};