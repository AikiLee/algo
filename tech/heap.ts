/**
 * 先构建大顶堆
 */
class Heap<T> {
    heap: T[];
    private length: number;

    constructor() {
        this.heap = [];
        this.length = 0;
    }
    /* 
        步骤：
        1:init the heap，offer basic method:
        constructor() use array to contain heap, index from 0;
        swap() exchange two element;
        size() return number of elements in the heap; 

        peek() reurn the top element in the heap;

        isEmpty() return true if the heap is empty;

        2: 
        insert() add an element at the end of the heap,then heapify_up();

        heapify_up() renew from bottom to top;

        extract() delete the top element,then heapify_down() ;

        heapify_down() renew the heap from top to bottom;

        3: buildHeap(arr: T[]):  build a heap from an array;
    
    
    */

    /**
     *
     * @param i  position of the element A
     * @param j position of the element B
     * exchange position of A  and B
     */
    private swap(i: number, j: number): void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     *
     * @returns return the number of elements in the heap
     */
    size(): number {
        return this.length;
    }

    /**
     *
     * @returns return the top element of the heap
     */
    peek(): T | undefined {
        return this.heap[0] ? (this.heap[0] as T) : undefined;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    /**
     *
     * @param index current element's index in the heap array
     * @description
     * 1. Compare the element with its parent, if it is the bigger one ,swap() them
     * 2. length++, index = parentIndex
     */
    private heapifyUp(): void {
        let index: number = this.length - 1;
        // heap is not empty
        if (this.isEmpty()) return;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    }

    /**
     *
     * @param value
     * @description insert value at the botom the heap, then this.length++,
     * last heapifyUp()
     */
    insert(value: T) {
        this.heap.push(value);
        this.heapifyUp();
        this.length++;
    }
}

const heap = new Heap();
heap.insert(10);