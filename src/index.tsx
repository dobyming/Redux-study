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
