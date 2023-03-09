import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// redux store 생성
const store = createStore(rootReducer);

// state를 rasie하여 store에 잘 들어갔는지 check
store.dispatch({
  type:'ADD_TODO',
  text: 'Use Redux'
}) 
console.log('store.getState()',store.getState());

const render = () => root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App 
        value ={store.getState()}
        onIncrement ={()=> store.dispatch({type:'INCREMENT'})}
        onDecrement ={()=> store.dispatch({type:'DECREMENT'})}
        />
    </Provider>
  </React.StrictMode>
);

render();

store.subscribe(render); //action이 rasie될때마다 리스너를 호출
