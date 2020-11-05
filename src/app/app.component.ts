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
  deleteItem(item){   
    console.log("delete item");  
    for(let i =0; i <this.todoArray.length; i++){
        if(item === this.todoArray[i]) {
          this.todoArray.splice(i,1);
        }
    }

  }


}
