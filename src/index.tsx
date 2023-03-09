import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import counter from './reducers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//저장소 생성
const store = createStore(counter);

const render = () => root.render(
  <React.StrictMode>
    <App 
      value ={store.getState()}
      onIncrement ={()=> store.dispatch({type:'INCREMENT'})}
      onDecrement ={()=> store.dispatch({type:'DECREMENT'})}
      />
  </React.StrictMode>
);

render();

store.subscribe(render); //action이 rasie될때마다 리스너를 호출
