import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./counterSlice"

function Couter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment value</button>
        <button onClick={()=> dispatch(decrement())}>Decrement value</button>
        <h4>{count}</h4>
    </div>
  )
}

export default Couter