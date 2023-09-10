import React from 'react';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <MainScreen />
    </Provider>
  );
}

export default App;
