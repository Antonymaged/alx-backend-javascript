export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (name !== 'string') {
      throw new TypeError('name is not a string');
    }
    this._name = name;
  }

  set length(length) {
    if (length !== 'number') {
      throw new TypeError('length is not a number');
    }
    this._length = length;
  }

  set students(students) {
    if (students instanceof Array) {
      this._students = students;
    } else {
      throw new TypeError('students is not an array');
    }
  }
}
