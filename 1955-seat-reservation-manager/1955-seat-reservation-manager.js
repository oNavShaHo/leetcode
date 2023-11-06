class SeatManager {
    constructor(n) {
        this.next = 1;
        this.heap = [];
    }

    reserve() {
        if (this.heap.length > 0 && this.heap[0] < this.next) {
            return this.heap.shift();
        }

        this.next += 1;
        return this.next - 1;
    }

    unreserve(seatNumber) {
        this.enqueueWithPriority(this.heap, seatNumber);
    }

    enqueueWithPriority(queue, value) {
        let i = 0;
        while (i < queue.length && queue[i] < value) {
            i++;
        }
        queue.splice(i, 0, value);
    }
}