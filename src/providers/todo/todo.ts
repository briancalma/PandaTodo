import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../../interfaces/todo';
import { StorageProvider } from '../storage/storage';
import { ITodos } from '../../interfaces/todos';
import { Platform } from 'ionic-angular';

const dateToday = new Date();

@Injectable()
export class TodoProvider {

  public todos: ITodos[] = [];

  public todoLogs: ITodos[] = [];

  constructor(public http: HttpClient, private storageCtrl: StorageProvider, private platform: Platform) {

    platform.ready().then( () => {
      platform.pause.subscribe( () => {
        let currentDate = this.getCurrentDate();
        this.storageCtrl.saveData( currentDate, this.todos);  
        console.log('APP IS IN BACKGROUND SAVING MODE . . .');
      });
    });

    platform.ready().then( () => {
      platform.resume.subscribe( () => {

        // let currentDate = this.getCurrentDate();

       //  this.storageCtrl.loadData(currentDate)

        console.log('Loading data from the storage . . .');
        

        this.loadTodo();
        
      });
    });

    this.loadTodo();
    this.getAllTodoPlayList();
  }

  getAllTodo() {
    // return this.todoList;
  }

  loadTodo() {

    let currentDate = this.getCurrentDate();

    this.storageCtrl.loadData( currentDate )
    .then( (data) => {
      if(data !== null) {
        // this.title = data.title;
        // this.todoList = data.todoList;
        // this.archivedList = data.archivedList;

        this.todos = data;

        console.log(data);

      }
    });
  }

  getCurrentDate() {
    let dd = dateToday.getDate();
    let mm = dateToday.getMonth();
    let yyyy = dateToday.getFullYear();

    return dd + "-" + mm + "-" + yyyy;
  }

  addTodoItem(newItem,index) {

    // let todo = {
    //   title : newItem,
    //   status : 'PENDING'
    // }

    // this.todoList.push(todo);
    // console.log(newItem);

    this.todos[index].todoList.push(newItem);
  }

  saveTodoList() {
    this.storageCtrl.saveData(this.getCurrentDate(), this.todos);
  }

  archivedTodoItem(playListIndex,index) {
    // this.todoList.splice(index,1);  
    // this.todoList[index].status = 'FINISHED';

    let todo: ITodo = this.todos[playListIndex].todoList[index];

    todo.status = 'FINISHED';

    this.todos[playListIndex].todoList.splice(index,1);

    this.todos[playListIndex].archivedList.push(todo);
    // this.todos[playListIndex].archivedList.push(todo);
  }

  updateTodoItem(playListIndex, title, index) {
    // this.todoList[index].title = title; 
    this.todos[playListIndex].todoList[index].title = title;
  }
  
  addTodoPlayList( data ) {

    // initializing some properties to an empty array.
    data.archivedList = [];
    data.todoList = [];
    this.todos.push(data);
    // console.log(this.todos);
  }

  getAllTodoPlayList() {
    
    let currentDate = this.getCurrentDate();
    
    this.todoLogs = this.storageCtrl.getAllSavedData( currentDate );
  }

}
