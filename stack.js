var StackImpl = /** @class */ (function () {
    function StackImpl(capacity) {
        this.capacity = capacity;
        this._size = 0;
    }
    Object.defineProperty(StackImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    StackImpl.prototype.push = function (value) {
        if (this.size === this.capacity) {
            throw new Error("Stack is full!");
        }
        var node = { value: value, next: this.head };
        this.head = node;
        this._size++;
        return this.head;
    };
    StackImpl.prototype.pop = function () {
        if (this.head == null) {
            throw new Error("Stack is empty!");
        }
        var node = this.head;
        this.head = node === null || node === void 0 ? void 0 : node.next;
        this._size--;
        return node.value;
    };
    return StackImpl;
}());
var stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size >= 1) {
    console.log(stack.pop());
}
