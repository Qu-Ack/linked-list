class Node {
    constructor(data = null,  next = null) {
        this.data = data;
        this.next = next;
    }
}




const LinkedList = function () {
    let head = null;
    let size = 0;
    function printListsize() {
        console.log(size)
    }


    function append(value) {
        let node = new Node(value)
        if (head == null) {
            head = node
            size++;
        } else {
            // traversing thorough the list. we make a tmp var and set it equal to head.
            // the next property of our head is also a node so until the next property becomes null this loop will go on.
            // and in the loop we set tmp to the next property which is the next node.
            let tmp = head;
            while(tmp.next != null) {
                tmp = tmp.next; 
            }
            tmp.next = node
            size++
        }

    }

    function prepend(value) {
        let node = new Node(value); 
        if (head == null) {
            head = node;
            
            size++
        } else {
            node.next = head;
            head = node;
            
            size++
        }   
    }

    function printTail() {
        let current = head;
        while(current.next !== null) {
            current = current.next
        }
        console.log(current.data);
    }



    function printHead() {
        console.log(head)
    }

    function at(index) {
        if (index < 0 ) {
            return null;
        } 

        let tmp = head;
        for (let i = 0; i < index ;i++) {
            tmp = tmp.next;
        }
        return tmp.data;
    }

    function pop() {
        if (head == null) {
            return;
        }

        let previous = null;
        let tmp = head;
        while(tmp.next) {
            previous = tmp;
            tmp = tmp.next;
        }
        previous.next = null;
    }

    function contains(value)  {
        if (head == null) {
            return null
        }
        let tmp = head;
        while (tmp.next) {
            if (tmp.next.next == null) {
                if (tmp.next.data == value) {
                    return true;
                }
            }
            if(tmp.data == value) {
                return true
            }
            tmp = tmp.next;
        }
    }

    function find(value)  {
        let counter = 0;
        if (head == null) {
            return null;
        }
        let tmp = head;
        while (tmp.next) {
            
            
            // if we will not use this code then our while loop will not consider the last element of our list and it will skip over it.
            // to prevent that we check the next to next element in prior and return the result if any.
            if (tmp.next.next == null) {
                counter++
                if (tmp.next.data == value) {
                    return counter;
                }
            }
            if (tmp.data == value) {
                return counter;
            }
            tmp = tmp.next;
            counter++
        }
    } 

    function toString() {
        if (head == null) {
            return null
        }
        let result = ``;
        let tmp = head; 
        while(tmp.next !== null) {
            result += `(${tmp.data}) -> `
            if (tmp.next.next == null) {
                result += `(${tmp.next.data}) -> null.`
                return result; 
            }
            tmp = tmp.next
        }
 
    }
    return {append , prepend , printListsize , printHead , printTail , at , pop , contains , find , toString}
}
let linkedList =  LinkedList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.prepend(2)
linkedList.append(10)
linkedList.append(12)
// linkedList.printListsize();
// linkedList.printHead();
// linkedList.printTail();
linkedList.printHead()
linkedList.pop()
linkedList.printHead()
console.log(linkedList.find(10))
console.log(linkedList.toString())