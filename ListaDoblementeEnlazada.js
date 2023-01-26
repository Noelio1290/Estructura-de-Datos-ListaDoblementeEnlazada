class Canal {
    constructor(data,next,prev){
    this.data = data
    this.next = next
    this.prev = prev
    }
};

class DobleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    addToTail(data){
        const newNodo = new Canal(data,null,this.tail)

        if(this.tail){
            newNodo.prev = this.tail
            this.tail.next = newNodo
            this.tail = newNodo
        } else {
            this.tail = newNodo
            this.head = newNodo
        }
        this.size ++;
    }

    print(){
        let current = this.head
        let result = ""
        while(current){
            result += current.data + "->"
            current = current.next
        };
        return result += "X";
    };

    
};


const dobleLinkedList = new DobleLinkedList()
dobleLinkedList.addToTail(1)
dobleLinkedList.addToTail(2)
dobleLinkedList.addToTail(3)
dobleLinkedList.addToTail(4)
dobleLinkedList.addToTail(5)
dobleLinkedList.addToTail(6)
dobleLinkedList.addToTail(7)
dobleLinkedList.addToTail(8)
dobleLinkedList.addToTail(9)
dobleLinkedList.addToTail(10)
console.log(dobleLinkedList.print())
//console.log(dobleLinkedList.reversePrint())
//console.log(dobleLinkedList)