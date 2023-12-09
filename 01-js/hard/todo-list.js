/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.answer = []
  }

  add(res){
    this.answer.push(res)
  }
  remove(rem){
   
    this.answer.splice(rem,1)
  }
  update(index,updatedTodo){
    if(index<this.answer.length){
      this.answer.splice(index,1,updatedTodo)
    }
  }

  getAll(){
    return this.answer
  }
  get(index){
    if(index > this.answer.length-1){
      return null
    }else{
      return this.answer[index]
    }
    
  }
  clear(){
    this.answer =[]
  }

}

module.exports = Todo;
