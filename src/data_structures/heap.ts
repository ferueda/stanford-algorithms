class Heap {
  data: number[];

  constructor() {
    this.data = [];
  }

  insert(element: number): void {
    this.data.push(element);

    let currentIndex = this.data.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    if (this.data[parentIndex] <= element) return;

    while (currentIndex > 0) {
      // swapping parent and children using destructuring
      [this.data[parentIndex], this.data[currentIndex]] = [
        this.data[currentIndex],
        this.data[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
}

export default Heap;
