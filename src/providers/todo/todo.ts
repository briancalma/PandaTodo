import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ITodo } from '../../interfaces/todo';

const dateToday = new Date();

@Injectable()
export class TodoProvider {

  public todoList:ITodo[] = [];

  constructor(public http: HttpClient, private storageCtrl: Storage) {
    // this.loadTodo();

    // JSON.stringify()
  }

  getAllTodo() {
    return this.todoList;
  }

  loadTodo() {

    let currentDate = this.getCurrentDate();

    this.storageCtrl.get(currentDate)
      .then( (data) => { console.log(data) } )
      .catch( (e) => console.log("Error in fetching data in the LOCAL STORAGE: ",e) ); 
  }

  getCurrentDate() {
    let dd = dateToday.getDate();
    let mm = dateToday.getMonth();
    let yyyy = dateToday.getFullYear();

    return dd + "-" + mm + "-" + yyyy;
  }

  addTodo(newItem) {

    let todo = {
      title : newItem,
      status : 'PENDING'
    }

    this.todoList.push(todo);
    // console.log(newItem);
  }

  saveTodoList() {
    this.storageCtrl.set( this.getCurrentDate(), this.todoList);
  }

  archivedTodoItem(index) {
    this.todoList.splice(index,1);  
    // this.todoList[index].status = 'FINISHED';
  }

  updateTodoItem(title,index) {
    this.todoList[index].title = title; 
  }

}
