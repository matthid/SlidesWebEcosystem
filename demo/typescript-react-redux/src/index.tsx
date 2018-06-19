import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store/store';

import MainPage from "./pages/MainPage";

const styles: React.CSSProperties = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
  
const Root = () => (
  <div style={styles}>
    <Provider store={store}>
       <MainPage />
    </Provider>
  </div>
);

ReactDOM.render(
    <Root />,
    document.getElementById("startDiv")
);