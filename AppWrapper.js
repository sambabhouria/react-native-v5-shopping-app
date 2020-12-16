import React from 'react';
import App from './App';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/store';

const AppWrapper = () => {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );
};

export default AppWrapper;
