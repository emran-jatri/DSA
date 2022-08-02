class Stack{
  constructor(){
    this.items = []
  }
  push(value){
    this.items.push(value)
  }
  pop(){
    this.items.pop()
  }
  peak(){
    return this.items[this.items.length - 1]
  }
  isEmpty(){
    return Boolean(!this.items.length)
  }
  printStack(){
    const printString = this.items.join(", ")
    console.log("Stack:", printString)
    
  }
}

const s1 = new Stack()
console.log("Is stack Empty?", s1.isEmpty())
console.log("stack Peak is:", s1.peak())
s1.push(1)
s1.push(2)
s1.push(3)
s1.printStack()

s1.pop()
s1.printStack()

console.log("Is stack Empty?", s1.isEmpty())
