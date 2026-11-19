class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        var qElement = new QElement(element, priority);
        this.items.unshift(qElement);
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        this.sort();
        return this.items.shift();
    }
    isEmpty() {
        if (this.items.length <= 0)
            return true;
        return false;
    }

    // A function to implement bubble sort 
    sort() {
        var i, j;
        for (i = 0; i < this.items.length - 1; i++)
            for (j = 0; j < this.items.length - i - 1; j++)
                if (this.items[j].priority > this.items[j + 1].priority) {
                    let temp = this.items[j];
                    this.items[j] = this.items[j + 1];
                    this.items[j + 1] = temp;
                }

    }
    // printPQueue()
}