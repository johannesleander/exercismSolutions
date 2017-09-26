function CircularBuffer(capacity) {
  var readIndex = 0;
  var writeIndex = 0;
  var buffer = new Array(capacity);

  function read() {
    if (!buffer[readIndex]) {
      throw new BufferEmptyException();
    }
    var data = buffer[readIndex];
    delete buffer[readIndex];
    console.log(readIndex);
    readIndex = increment(readIndex);
    console.log(readIndex);
    return data;
  }

  function write(data) {
    if (!data) return;
    if (bufferIsFull()) {
      throw new BufferFullException();
    };
    buffer[writeIndex] = data;
    writeIndex = increment(writeIndex);
  }

  function forceWrite(data) {
    if (bufferIsFull()) {
      buffer[writeIndex] = data;
      writeIndex = increment(writeIndex);
      readIndex = increment(readIndex);
    } else {
      write(data);
    }
  }

  function clear() {
    readIndex = 0;
    writeIndex = 0;
    buffer = new Array(capacity);
  }

  function increment(index) {
    return (index + 1) % capacity;
  }

  function bufferIsFull() {
    for (let v of buffer) {
      if(!v) return false;
    }
    return true;
  }

  return {
    read: read,
    write: write,
    clear: clear,
    forceWrite: forceWrite
  };
}

function BufferEmptyException() {
  this.name = "BufferEmptyException";
  this.message = "Buffer is empty.";
}

function BufferFullException() {
  this.name = "BufferFullException";
  this.message = "Buffer is full.";
}

module.exports = {
  circularBuffer: function(capacity) {
    return new CircularBuffer(capacity);
  },

  bufferEmptyException: function() {
    return new BufferEmptyException();
  },

  bufferFullException: function() {
    return new BufferFullException();
  }
};
