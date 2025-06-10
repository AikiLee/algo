/**
 * @description build big heap:
 * 1. method:
 *    public:
 *          buildHeap();
 *          size();
 *          peek();
 *          insert();
 *          extract();
 *    private:
 *          swap();
 *          heapifyUp();
 *          heapifyDown();
 * 2. next: integrated small heap
 */
class Heap {
    constructor(arr) {
        if (!arr) {
            this.heap = [];
            this.length = 0;
        }
        else {
            this.heap = arr;
            this.length = arr.length;
            this.buildHeap(arr);
        }
    }
    //ts 没有重写吗
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
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    /**
     *
     * @returns return the number of elements in the heap
     */
    size() {
        return this.length;
    }
    /**
     *
     * @returns return the top element of the heap
     */
    peek() {
        return this.heap[0] ? this.heap[0] : undefined;
    }
    isEmpty() {
        return this.length === 0;
    }
    /**
     *
     * @param index current element's index in the heap array
     * @description
     * 1. Compare the element with its parent, if it is the bigger one ,swap() them
     * 2. length++, index = parentIndex
     */
    heapifyUp() {
        let index = this.length - 1;
        // heap is not empty
        if (this.isEmpty())
            return;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.heap[index] <= this.heap[parentIndex]) {
                // when parent >= cur, stop
                break;
            }
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }
    /**
     *
     * @param value
     * @description insert value at the botom the heap, then this.length++,
     * last heapifyUp()
     */
    insert(value) {
        this.heap.push(value);
        this.length++;
        this.heapifyUp();
    }
    /**
     *
     * @returns return the top value of the heap, then this.length--,
     */
    // pop(): T | undefined {
    //     if (this.length === 0) {
    //         return undefined;
    //     } else {
    //         const value = this.heap.pop();
    //         this.length--;
    //         return value;
    //     }
    // }
    /**
     *
     * @returns return the top element
     * @description judge the length, if there's no element return undefined, if one element
     */
    extract() {
        if (this.length === 0) {
            return undefined;
        }
        // heap only has one element
        if (this.length === 1) {
            const value = this.heap.pop();
            this.length--;
            return value;
        }
        const topVal = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.length--;
        this.heapifyDown(0);
        return topVal;
    }
    /**
     * @description from top to bottom, adjust the heap
     * to main a big root heap:
     *  1. while 2*index + 1 < length, organize the circle
     *  2. calcuate the leftChildIndex, rightChildIndex, parentIndex
     *  3. find the max value between leftChildIndex and rightChildIndex, then swap()
     *  4. renew index
     *
     */
    heapifyDown(index) {
        while (2 * index + 1 < this.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let largerIndex = leftChildIndex;
            if (rightChildIndex < this.length && this.heap[rightChildIndex] > this.heap[leftChildIndex]) {
                largerIndex = rightChildIndex;
            }
            // if the parent is larger than the child, then break. because it is already a big heap
            if (this.heap[index] >= this.heap[largerIndex]) {
                break;
            }
            this.swap(index, largerIndex);
            // update the index
            index = largerIndex;
        }
    }
    /**
     *
     * @param arr input an array
     * @description build a heap from an array:
     * 1. read array
     * 2. then heapifyUp
     */
    buildHeap(arr) {
        this.heap = arr;
        let start = Math.floor((this.length - 1) / 2);
        for (let i = start; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}
// const heap = new Heap();
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(5);
// heap.extract();
// console.log(heap.size()); //expected 3
const arr = [10, 20, 30, 5];
const heap = new Heap(arr);
console.log(heap.size());
//# sourceMappingURL=heap.js.map