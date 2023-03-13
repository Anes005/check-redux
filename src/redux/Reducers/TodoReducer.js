import {ADD_TODO , DELETE_TODO , DONE_TODO } from './Actions/type';

const initstate = {
    todos :[ {
        id : "01" ,
        descrtion : "first Todo" ,
        isDone : false
    }]

}
const TodoReducer = (state = initstate , action) => {
    switch (action.type) {
        case ADD_TODO :
            return{
                ...state,
                todos : [...state.todos , action.paylaod]
            }
        case DELETE_TODO :
            return{
                ...state,
                todos : state.todos.filter(elm => elm.id !== action.paylaod)
            }
        case  DONE_TODO :
            return state.map(elm => elm.id === action.paylaod? {...elm,isDone : !elm.isDone} :elm) 
            
            default:  
            return state     
    }
}

export default TodoReducer