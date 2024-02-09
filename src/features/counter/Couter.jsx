import { increment, decrement, incrementByPayload } from "./counterSlice"
import {useDispatch, useSelector} from 'react-redux'

function Couter() {

    const dispatch = useDispatch()
    const cout = useSelector((state)=>state.counter.value)

  return (
    <div>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(incrementByPayload(10))}>add 10</button>
        <h3>{cout}</h3>
    </div>
  )
}

export default Couter