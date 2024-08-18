/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
class CircularBuffer {
  constructor(size) {
    this.buffer = new Array(size).fill(null); // [[obj, buff], [obj, buff]]
  }

  put(obj) {
    let newObj = [obj, 1];
    let activeObjs = this.getObjsInBuffer();

    if (activeObjs.length > 0) {
      this.incrementActiveObjs(activeObjs);
    } else {
      return this.assignToFirstPosition(newObj);
    }

    if (this.bufferIsFull()) {
      this.buffer[this.findOldestIdx()] = newObj;
      return null;
    } else { // else find last objs idx and look for a free space behind it
      let idx = this.findLastPutObjIdx();

      idx = this.assignToFreeSpaceBehindLastObj(idx, newObj);
      if (idx === null) return null;

      if (this.noFreeSpaceFoundBehind(idx)) {
        if (this.assignToFreeSpaceFromFront(newObj)) return null;
      } else {  // if empty slot was found, place obj there
        this.buffer[idx] = newObj;
        return null;
      }
    }
    return null;
  }

  get() {
    let oldestObj;
    if (this.buffer.every(obj => obj === null)) return null;

    oldestObj = this.buffer[this.findOldestIdx()];
    this.buffer[this.findOldestIdx()] = null;

    return oldestObj[0];
  }

  getBuffer() {
    return this.buffer.map(arr => {
      if (arr === null) return null;
      return arr[0];
    });
  }

  removeObj(obj) {
    let idx = this.buffer.indexOf(this.buffer.find(arr => {
      if (arr === null) return false;
      return arr[0] === obj;
    }));

    this.buffer[idx] = null;
  }

  bufferIsFull() {
    return this.buffer.every(obj => obj !== null);
  }

  findOldestIdx() {
    let sum = 0;
    let biggest;
    for (let i = 0; i < this.buffer.length; i++) {
      if (this.buffer[i] === null) continue;
      if (this.buffer[i][1] > sum) {
        sum = this.buffer[i][1];
        biggest = this.buffer[i];
      }
    }

    return this.buffer.indexOf(biggest);
  }

  findLastPutObjIdx() {
    return this.buffer.indexOf(this.buffer.find(arr => {
      if (arr === null) return false;
      return arr[1] === 2;
    }));
  }

  getObjsInBuffer() {
    return this.buffer.filter(obj => obj !== null);
  }

  incrementActiveObjs(activeObjs) {
    activeObjs.forEach(arr => {
      arr[1] += 1;
    });
  }

  assignToFirstPosition(newObj) {
    this.buffer[0] = newObj;
    return null;
  }

  assignToFreeSpaceBehindLastObj(idx, newObj) {
    while (this.buffer[idx] !== null) {
      idx += 1;

      if (this.buffer[idx] === null) {
        this.buffer[idx] = newObj;
        return null;
      }

      if (this.buffer.length === idx) {
        break;
      }
    }

    return idx;
  }

  noFreeSpaceFoundBehind(idx) {
    return this.buffer.length === idx;
  }

  assignToFreeSpaceFromFront(newObj) {
    for (let i = 0; i < this.buffer.length; i++) {
      if (this.buffer[i] === null) {
        this.buffer[i] = newObj;
        return true;
      }
    }

    return false;
  }
}

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

// buffer.put(1);
// console.log(buffer.buffer);
// buffer.put(2);

// console.log(buffer.get() === 1);
// console.log(buffer.buffer);
// buffer.put(3);
// console.log(buffer.buffer);
// buffer.put(4);
// console.log(buffer.buffer);

// console.log(buffer.get() === 2);
// console.log(buffer.buffer);
// buffer.put(5);
// console.log(buffer.buffer);
// buffer.put(6);
// console.log(buffer.buffer);
// buffer.put(7);
// console.log(buffer.buffer);
// console.log(buffer.get() === 5);
// console.log(buffer.get() === 6);
// console.log(buffer.get() === 7);
// console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1);
anotherbuffer.put(2);
console.log(anotherbuffer.get() === 1);
console.log(anotherbuffer.getBuffer());

anotherbuffer.put(3);
console.log(anotherbuffer.getBuffer());
anotherbuffer.put(4);
console.log(anotherbuffer.getBuffer());
console.log(anotherbuffer.get() === 2);
console.log(anotherbuffer.getBuffer());
anotherbuffer.put(5);
console.log(anotherbuffer.getBuffer());
anotherbuffer.put(6);
console.log(anotherbuffer.getBuffer());
anotherbuffer.put(7);
console.log(anotherbuffer.getBuffer());
anotherbuffer.buffer[1] = null;
console.log(anotherbuffer.getBuffer());
anotherbuffer.buffer[0] = null;
anotherbuffer.put(2);
console.log(anotherbuffer.getBuffer());
// console.log(anotherbuffer.get() === 4);
// console.log(anotherbuffer.get() === 5);
// console.log(anotherbuffer.get() === 6);
// console.log(anotherbuffer.get() === 7);
// console.log(anotherbuffer.get() === null);