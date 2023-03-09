import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// logger middleware 생성
const loggerMiddleware = (store:any) => (next:any) => (action:any) => {
  console.log("store",store);
  console.log("action",action)
  next(action);
}
const middleware = applyMiddleware(thunk,loggerMiddleware); //여러개의 미들웨어를 받을 수 있으며 순차적으로 진행

// redux store 생성(+middleware 등록)
const store = createStore(rootReducer,middleware);

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
