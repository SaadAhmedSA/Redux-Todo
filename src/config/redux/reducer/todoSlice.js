

import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "Todos",
    initialState: {
        todo: []
    },
    reducers: {
        addTodo: (state , action) => {
    
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        deletedtodo: (state , action) =>{
            state.todo.splice(action.payload.index , 1)
        },
        editedTodo:(state,action)=>{
            state.todo.splice(action.payload.index , 1 , {
                title: action.payload.title,
                id: nanoid()
            } )
        }
    }
})
export const { addTodo , deletedtodo,editedTodo } = todoSlice.actions
export default todoSlice.reducer