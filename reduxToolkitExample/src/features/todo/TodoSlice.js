import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload,
                completed : false,
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=> todo.id!==action.payload);
        },
        updateTodo: (state,action) => {
            state.todos = state.todos.map((todo)=> 
                todo.id===action.payload.id ? action.payload.todo : todo
                )
        },
        toggleCompleted: (state,action) => {
            state.todos = state.todos.map((todo)=>
                todo.id===action.payload.id ? {...todo, completed: !todo.completed} : todo )
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleCompleted} = TodoSlice.actions

export default TodoSlice.reducer