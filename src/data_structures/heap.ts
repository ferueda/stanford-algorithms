class Heap {
  data: number[];

  constructor() {
    this.data = [];
  }

  _heapify(): void {
    let currentIndex = this.data.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    if (this.data[parentIndex] <= this.data[currentIndex]) return;

    while (currentIndex > 0) {
      // swapping parent and child using destructuring
      [this.data[parentIndex], this.data[currentIndex]] = [
        this.data[currentIndex],
        this.data[parentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  getMin(): number {
    return this.data[0];
  }

  insert(element: number): void {
    this.data.push(element);
    this._heapify();
  }
}

export default Heap;
