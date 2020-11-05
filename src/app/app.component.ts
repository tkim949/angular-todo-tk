import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[];
  title = 'todo-tk';
  //add item
  addTodo(value) {
    this.todoArray.push(value);
    console.log(this.todoArray);
  }

  //delete item
  deleteItem(){   
    console.log("delete item");  
  }


}
