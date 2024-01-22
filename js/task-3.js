class StringBuilder {
  #value;
  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  padStart(pad) {
    // this.#value = pad + this.#value;
    this.#value = `${pad}${this.#value}`;
  }
  padEnd(pad) {
    // this.#value = this.#value + pad;
    this.#value = `${this.#value}${pad}`;
  }
  padBoth(pad) {
    // this.#value = pad + this.#value + pad;
    this.#value = `${pad}${this.#value}${pad}`;
  }
}
