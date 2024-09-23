class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyList {
  #head = null;
  #length = 0;

  size() {
    return this.#length;
  }

  get(index) {
    let current = this.#head;
    for (let i = 0; i < index; i++) {
      current = current.next;
      if (current == null) {
        throw new Error("Index out of bounds");
      }
    }
    if (index < 0) {
      throw new Error("Index out of bounds");
    }
    return current.value;
  }

  insert(value, index) {
    let current = this.#head;
    let previous;
    //if we insert at the beginning
    if (index == 0) {
      this.#head = new Node(value);
      this.#head.next = current;
      this.#length++;
      return;
    }
    //if we insert at the end
    if (index == this.#length - 1) {
      this.add(value);
      this.#length++;
      return;
    }
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }
    previous.next = new Node(value);
    previous.next.next = current;
    this.#length++;
  }

  add(value) {
    //if the list is empty
    if (!this.#head) {
      this.#head = new Node(value);
      this.#length++;
    } else {
      let current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
      this.#length++;
    }
  }

  remove(index) {
    let current = this.#head;
    //if we remove the first element
    if (index == 0) {
      this.#head = current.next;
      this.#length--;
      return;
    }
    //if we try to remove an index that is bigger than the length of the list
    if (index >= this.#length) {
      throw new Error("Index out of bounds");
    }
    //if we try to remove an index that is smaller than 0
    if (index < 0) {
      throw new Error("Index out of bounds");
    }
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.#length--;
  }

  print() {
    //if the list is empty
    if (!this.#head) {
      return;
    }
    let current = this.#head;
    let index = 0;
    while (current) {
      console.log(index + ": " + current.value);
      current = current.next;
      index++;
    }
  }
}

let isidorasMarks = new MyList();

isidorasMarks.add(1);
isidorasMarks.add(2);
isidorasMarks.add(3);
isidorasMarks.add(4);
// isidorasMarks.add(4);
// isidorasMarks.add(3);
// isidorasMarks.add(2);

// const isidorasBetterMarks = new MyList(8);
// isidorasBetterMarks.add(2);
// isidorasBetterMarks.add(2);
// isidorasBetterMarks.add(2);
// isidorasBetterMarks.add(99);

// isidorasMarks.addList(isidorasBetterMarks)

// console.log("size: " + isidorasMarks.size());

// isidorasMarks.remove(1);
// isidorasMarks.remove(1);

isidorasMarks.insert(5, 0);
console.log("GET", isidorasMarks.get(-1));
isidorasMarks.print();

// make remove from an index, insert, fix add method, make error handling for different types
