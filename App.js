import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigator from './src/Navigation/MainNavigation';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from "redux-thunk";
import productReducer from './src/Store/reducer/product';
import categoryReducer from './src/Store/reducer/category';
import subcategoryReducer from './src/Store/reducer/subcategory';
import authReducer from './src/Store/reducer/auth';
import cartReducer from './src/Store/reducer/cart';
import addressReducer from './src/Store/reducer/address';
import { init } from './src/Store/sqlite/db';

init()
.then((response) => {
  console.log('Success ', response)
})
.catch(err => {
  console.log("Failed ", err)
})

const rootReducer = combineReducers({
  products:productReducer,
  categories:categoryReducer,
  subcategories:subcategoryReducer,
  auth:authReducer,
  cart:cartReducer,
  address:addressReducer
})  

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator /> 
   </Provider>
  );
};



export default App;
