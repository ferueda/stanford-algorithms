import Heap from '../../data_structures/heap';

describe('Heap', () => {
  let heap: Heap;

  beforeEach(() => {
    heap = new Heap();
  });

  test('it should be instance of Heap and be empty', () => {
    expect(heap).toBeInstanceOf(Heap);
    expect(heap.data).toHaveLength(0);
  });

  describe('insert()', () => {
    test('it should insert an element to data', () => {
      heap.insert(2);

      expect(heap.data).toHaveLength(1);
      expect(heap.data).toEqual([2]);
    });

    test('it should insert various elements to data', () => {
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);

      expect(heap.data).toHaveLength(3);
      expect(heap.data).toEqual([1, 2, 3]);
    });

    test('it should insert elements and update nodes order', () => {
      heap.insert(2);
      heap.insert(1);

      expect(heap.data).toHaveLength(2);
      expect(heap.data).toEqual([1, 2]);

      heap.insert(6);
      heap.insert(3);

      expect(heap.data).toHaveLength(4);
      expect(heap.data).toEqual([1, 2, 6, 3]);

      heap.insert(1);

      expect(heap.data).toHaveLength(5);
      expect(heap.data).toEqual([1, 1, 6, 3, 2]);
    });

    test('it should bubble up nodes order update until Heap is sorted', () => {
      heap.insert(9);
      heap.insert(9);
      heap.insert(9);
      heap.insert(9);
      heap.insert(9);
      heap.insert(9);
      heap.insert(9);
      heap.insert(1);

      expect(heap.data).toEqual([1, 9, 9, 9, 9, 9, 9, 9]);

      heap.insert(1);

      expect(heap.data).toEqual([1, 1, 9, 9, 9, 9, 9, 9, 9]);

      heap.insert(1);

      expect(heap.data).toEqual([1, 1, 9, 9, 1, 9, 9, 9, 9, 9]);
    });
  });

  describe('removeMin()', () => {
    test('it should remove min element from data', () => {
      heap.insert(2);
      heap.removeMin();

      expect(heap.data).toHaveLength(0);
      expect(heap.data).toEqual([]);
    });

    test('it should remove min node from a 3 node Heap', () => {
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);
      heap.removeMin();

      expect(heap.data).toHaveLength(2);
      expect(heap.data).toEqual([2, 3]);

      heap.removeMin();

      expect(heap.data).toHaveLength(1);
      expect(heap.data).toEqual([3]);
    });

    test('it should remove min node and update nodes order from a 5 node Heap', () => {
      heap.insert(2);
      heap.insert(1);
      heap.insert(6);
      heap.insert(3);
      heap.insert(1);
      heap.removeMin();

      expect(heap.data).toHaveLength(4);
      expect(heap.data).toEqual([1, 2, 6, 3]);

      heap.removeMin();

      expect(heap.data).toHaveLength(3);
      expect(heap.data).toEqual([2, 3, 6]);
    });
  });
});
