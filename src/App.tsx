import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import './App.css';
import { RootState } from './reducers';

type Props = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
}

function App({value,onIncrement,onDecrement}:Props) {
  // redux store의 값 접근
  const todos : string[] = useSelector((state: RootState) => state.todos);
  const counter = useSelector((state: RootState) => state.counter); 
  // store에 있는 dispatch 함수 접근
  const dispatch = useDispatch(); 

  const [todoValue,setTodoValue] = useState("");
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }
  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch({type:'ADD_TODO',text:todoValue}); //store에 있는 reducer 함수로 전달하여 state를 raise
    setTodoValue("");
  }
  return (
    <div className="App">
      Checked : {counter} times
      {' '}
      <button onClick={onIncrement}>+</button>
      {' '}
      <button onClick={onDecrement}>-</button>

      <ul>
        {todos.map((todo,it)=> <li key={it}>{todo}</li>)}
      </ul>

      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default App;
