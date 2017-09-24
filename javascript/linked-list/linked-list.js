// TODO: Unfinished

class LinkedList {
  constructor() {
    this.data = null;
    this.first = null;
    this.last = null;
  }

  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.previous = null;
    }
  }
}

LinkedList.prototype.push = function (value) {
  let node = new Node(value);
  if(first == null) {
    first = last = node;
  } else {
    last.next = node;
    last = node;
  }
};

LinkedList.prototype.pop = function () {
  var value = first;
  first = first.next;
  return value;
};

LinkedList.prototype.shift = function () {

};

LinkedList.prototype.unshift = function () {

};

LinkedList.prototype.count = function () {

};

LinkedList.prototype.delete = function (value) {
  let i = 0;
  let current = first, previous;
  if ()
};
