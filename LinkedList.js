

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

linkedList.printList()

