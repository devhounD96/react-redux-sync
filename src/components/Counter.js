import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/ducks/counter';

const Counter = ({name}) => {
    const [votes, setVotes] = useState(0);
    const dispatch = useDispatch();

    const handleIncrement = () =>{
       dispatch(increment());
       setVotes(votes + 1);
    }
    const handleDecrement = () =>{
      dispatch(decrement());
      setVotes(votes - 1);
    }
  return (
      <>
      <div style={{textAlign:'center', margin:'10px'}}>
        <h1>{name}</h1>
        <div style={{backgroundColor:'grey'}}>
            <h4>Votes:{votes}</h4>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
       </div>
      </>
  )
}

export default Counter
