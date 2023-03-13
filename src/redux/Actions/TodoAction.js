import {ADD_TODO,DELETE_TODO,DONE_TODO,EDIT_TODO} from './type';
import {v4 as uuidv4} from 'uuid';

export const addTodo = (newTodo) => {
    return{
        type : ADD_TODO ,
        payload : {...newTodo , id : uuidv4(), isDone:false }
    }
}
export const deleteTodo = (id) => {
    return {
        type : DELETE_TODO ,
        payload : id
    }
}
export const doneTodo = (id) => {
    return{
        type : DONE_TODO,
        payload : id
    }
} 
export const editTodo = (id) => {
    return{
        type : EDIT_TODO,
        payload : id
    }
}