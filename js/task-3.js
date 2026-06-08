class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    const newStr = this.#value + str;
    this.#value = newStr;
  }

  padStart(str) {
    const newStr = str + this.#value;
    this.#value = newStr;
  }

  padBoth(str) {
    const newStr = str + this.#value + str;
    this.#value = newStr;
  }
}

//results
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
