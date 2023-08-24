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
        if (head == null) {
            head = new Node(value)
            size++;
        } else {
            let tmp = head;
            while(tmp.next != null) {
                tmp = tmp.next; 
            }
            tmp.next = new Node(value)
            size++
        }

    }

    function prepend(value) {
        let node = new Node(value); 
        if (head == null) {
            head = node;
            size++
        } else {
            let tmp  = head;
            node.next = tmp;
            node = head; 
            console.log(head)
            size++
        }   
    }


    return {append , prepend , printListsize}
}
let linkedList =  LinkedList();
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.append(10)
linkedList.prepend(2)
linkedList.printListsize();