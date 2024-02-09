import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './TodoSlice'

function TodoList() {

    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const {items} = useSelector((action)=>action.toDo)

    function handleSave(){
        if(text.trim()!= ""){
            dispatch(addTodo(text))
            setText('')
        }
    }


  return (
    <div>
        <input onChange={(e)=>setText(e.target.value)} type="text" value={text} placeholder='Enter Task'/>
        <button onClick={handleSave}>Save</button>
       {items.map((v,i)=>{
         return(
            <div><input type="text" value={v}/><button onClick={()=>dispatch(deleteTodo(i))}>delete</button></div>
         )
       })}
    </div>
  )
}

export default TodoList