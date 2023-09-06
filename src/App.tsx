import React, { useEffect } from 'react';
import MainScreen from './screens/MainScreen';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}

export default App;
