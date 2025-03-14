import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id: 1, text:"i am bad boy"
    }]
}

export const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !==action.payload)
        },
        toggleTodo: (state, action)=>{
            const todo = state.todos.find((todo)=> todo.id === action.payload)
            todo.done = !todo.done
        },
        updateTodo: (state, action)=>{
            const todo = state.todos.find((todo)=> todo.id === action.payload.id)
            todo.text = action.payload.text
        }
    }
})

export const {addTodo, removeTodo, toggleTodo, updateTodo}= todoSlice.actions
export default todoSlice.reducer