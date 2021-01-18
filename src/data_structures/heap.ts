class Heap {
  data: number[];

  constructor() {
    this.data = [];
  }

  getMin(): number {
    return this.data[0];
  }

  insert(element: number): void {
    this.data.push(element);

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

  removeMin(): void {
    if (this.data.length < 2) {
      this.data.pop();
      return;
    }

    this.data[0] = this.data.pop() as number;
    let currentIndex = 0;
    const len = this.data.length;

    while (currentIndex < len) {
      let leftNodeIndex = 2 * currentIndex + 1;
      let rightNodeIndex = 2 * currentIndex + 2;

      if (leftNodeIndex < len && this.data[leftNodeIndex] < this.data[currentIndex]) {
        [this.data[currentIndex], this.data[leftNodeIndex]] = [
          this.data[leftNodeIndex],
          this.data[currentIndex],
        ];
        currentIndex = leftNodeIndex;
        continue;
      } else if (rightNodeIndex < len && this.data[rightNodeIndex] < this.data[currentIndex]) {
        [this.data[currentIndex], this.data[rightNodeIndex]] = [
          this.data[rightNodeIndex],
          this.data[currentIndex],
        ];
        currentIndex = rightNodeIndex;
        continue;
      }

      break;
    }
  }
}

export default Heap;
