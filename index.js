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
        
    }

    return {append , prepend , printListsize , printHead , printTail}
}
let linkedList =  LinkedList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.prepend(2)
linkedList.append(10)
linkedList.append(12)
linkedList.printListsize();
linkedList.printHead();
linkedList.printTail();


