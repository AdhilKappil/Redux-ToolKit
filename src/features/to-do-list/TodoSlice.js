import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : []
}

const ToDoSlice = createSlice({
    name:'toDo',
    initialState,

    reducers : {
        addTodo:(state, action)=>{
            state.items.push(action.payload)
        },
        deleteTodo:(state, action)=>{
            state.items=state.items.filter((v,i)=>{
                if(action.payload != i){
                    return v
                }
            })
        }
    }
})

export const {addTodo, deleteTodo} = ToDoSlice.actions

export default ToDoSlice.reducer    