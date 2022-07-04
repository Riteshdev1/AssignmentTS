/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import DealContainer from './src/components/DealContainer';
import {Provider} from 'react-redux';
import {applyMiddleware, legacy_createStore} from 'redux';
import rootReducer from './src/redux/reducer/ReducerFactory';
import createSagaMiddleware from 'redux-saga';
import dataSaga from './src/redux/saga/SagaFactory';
import {SafeAreaView} from 'react-native';

const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  const store = legacy_createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(dataSaga);
  return store;
}

const store = configureStore();

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <DealContainer />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
