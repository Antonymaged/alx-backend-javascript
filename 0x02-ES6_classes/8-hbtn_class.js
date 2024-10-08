export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](h) {
    if (h === 'number') {
      return this._size;
    }
    if (h === 'string') {
      return this._location;
    }
    return this;
  }
}
