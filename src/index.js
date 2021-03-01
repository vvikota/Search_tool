import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App.tsx';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {reducer, Operation} from "./redux/reducer.js";
import thunk from "redux-thunk";
import {configureAPI} from "./api";

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));
  const enhancer =  applyMiddleware(thunk.withExtraArgument(api))
  const store = createStore(reducer, enhancer);

  store.dispatch(Operation.loadData());

  ReactDOM.render(<Provider store={store}>
                    <App />
                  </Provider>,
    document.getElementById('root')
  );
};

init();