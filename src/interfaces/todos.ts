import { ITodo } from "./todo";

export interface ITodos {
    title: string;
    todoList: ITodo[];
    archivedList:ITodo[];
} 