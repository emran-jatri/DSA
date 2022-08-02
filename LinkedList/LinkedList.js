

class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
  }
  
  addFirst(value){
    let newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }
  addLast(value){
    let newNode = new Node(value)
    if(this.head === null){
      this.head = newNode
    }
    else{
      // ---------------------- go to last node start ----------------------
      let currentNode = this.head
      while(currentNode.next !== null){
        currentNode = currentNode.next
      }
      // ---------------------- go to last node end ----------------------
      currentNode.next = newNode
    }
  }
  deleteNode(value){
    let currentNode = this.head
    let previousNode = null
    
    if(currentNode){
      while(currentNode.next !== null && currentNode.value !== value){
        previousNode = currentNode
        currentNode = currentNode.next
      }
      if(currentNode === this.head){
        this.head = this.head.next
      }
      else{
        if(currentNode.value !== value){
          throw new Error(`Value (${value}) is not found`)
        }
        else{
          previousNode.next = currentNode.next
        }
      }
    }
    else{
      throw new Error(`Value (${value}) is not found`)
    }
  }
  printList(){
    let printStr = ""
    let currentNode = this.head
    if(currentNode){
      while(currentNode.next !== null){
        printStr += `${currentNode.value} -> `
        currentNode = currentNode.next
      }
      printStr += currentNode.value
    }
    else{
      printStr = this
    }
    console.log(printStr)
  }
}


let linkedList = new LinkedList();
linkedList.addLast(1)
linkedList.addLast(2)
linkedList.addLast(3)
linkedList.addLast(4)
linkedList.addLast(5)
linkedList.deleteNode(40)
// linkedList.deleteNode(1)
// linkedList.deleteNode(2)
// linkedList.addFirst(6)
// linkedList.addFirst(7)
// linkedList.deleteNode(70)


linkedList.printList()

