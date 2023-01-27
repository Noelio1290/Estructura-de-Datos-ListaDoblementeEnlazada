class DLLNode {
  constructor(payload){
    this.payload = payload;
    this.next = null;
    this.prev = null;
  }

  setNext(dLLNode){
    this.next = dLLNode;
  }

  setPrev(dLLNode){
    this.prev = dLLNode;
  }

  setPayload(payload){
    this.payload = payload;
  }

  getNext(){
    return this.next;
  }

  getPrev(){
    return this.prev;
  }

  getPayload(){
    return this.payload
  }
}


class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addNode(dLLNode){
    
    if(!this.head){
      this.head = dLLNode;
      this.current = this.head;
      this.tail = this.head;
    } else {
      const previousTail = this.tail;
      this.tail = dLLNode;
      this.tail.setPrev(previousTail);
      previousTail.setNext(this.tail); 
    }
  }

  goNextChannel(){
    if(this.current.next){
      this.current = this.current.next
    }
  }

  goPrevChannel(){
    if(this.current.prev){
      this.current = this.current.prev
    }
  }

  getCurrentChannel(){
    return this.current;
  }
}

const tvSimulator = new DoubleLinkedList();

tvSimulator.addNode(new DLLNode({channelName: 1}))
tvSimulator.addNode(new DLLNode({channelName: 2}))
tvSimulator.addNode(new DLLNode({channelName: 3}))
tvSimulator.addNode(new DLLNode({channelName: 4}))
tvSimulator.addNode(new DLLNode({channelName: 5}))
tvSimulator.addNode(new DLLNode({channelName: 6}))

tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
console.log(tvSimulator.getCurrentChannel())
tvSimulator.goPrevChannel()
tvSimulator.goPrevChannel()
console.log(tvSimulator.getCurrentChannel())
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
tvSimulator.goNextChannel()
console.log(tvSimulator.getCurrentChannel())
