/**
 * 先构建大顶堆
 */
var Heap = /** @class */ (function () {
    function Heap() {
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
    Heap.prototype.swap = function (i, j) {
        var _a;
        _a = [this.heap[j], this.heap[i]], this.heap[i] = _a[0], this.heap[j] = _a[1];
    };
    /**
     *
     * @returns return the number of elements in the heap
     */
    Heap.prototype.size = function () {
        return this.length;
    };
    /**
     *
     * @returns return the top element of the heap
     */
    Heap.prototype.peek = function () {
        return this.heap[0] ? this.heap[0] : undefined;
    };
    Heap.prototype.isEmpty = function () {
        return this.length === 0;
    };
    /**
     *
     * @param index current element's index in the heap array
     * @description
     * 1. Compare the element with its parent, if it is the bigger one ,swap() them
     * 2. length++, index = parentIndex
     */
    Heap.prototype.heapifyUp = function () {
        var index = this.length - 1;
        // heap is not empty
        if (this.isEmpty())
            return;
        var parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (this.heap[index] > this.heap[parentIndex]) {
                this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    };
    /**
     *
     * @param value
     * @description insert value at the botom the heap, then this.length++,
     * last heapifyUp()
     */
    Heap.prototype.insert = function (value) {
        this.heap.push(value);
        this.heapifyUp();
        this.length++;
    };
    return Heap;
}());
var heap = new Heap();
heap.insert(10);
