import { Component,ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArray=[];
  title = 'todo-tk';
  //@ViewChild('todo') inputName; // accessing the reference element
  //todo:string='';
  @ViewChild('todo') inputName;
 
  //add item
  addTodo(value) {
    this.todoArray.push(value);
    this.inputName.nativeElement.value = ' ';
    //this.todo='';
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
