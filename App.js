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
import orderReducer from './src/Store/reducer/order'
import firebase, { Firebase, notifications } from 'react-native-firebase';
import { Platform } from 'react-native';




const rootReducer = combineReducers({
  products:productReducer,
  categories:categoryReducer,
  subcategories:subcategoryReducer,
  auth:authReducer,
  cart:cartReducer,
  address:addressReducer,
  order:orderReducer
})  

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const App = () => {



  //Notification
  React.useEffect(() => {
    getFcmToken()
    createChannel();
    notificationListener();
  },[])
 
  const getFcmToken = async() => {
    const firebaseToken = await firebase.messaging().getToken();

    console.log(firebaseToken)
  }

  const createChannel = () => {
    const channel = new firebase.notifications.Android.Channel(
      'channelId',
      'channelName',
      firebase.notifications.Android.Importance.Max
    ).setDescription('Description');

    firebase.notifications().android.createChannel(channel)
  };

  const notificationListener = () => {
    firebase.notifications().onNotification((notification) => {
      if(Platform.OS ==='android'){
        const localNotification = new firebase.notifications.Notification({
          sound:'default',
          show_in_background:true
        })
        .setNotificationId(notification.notificationId)
        .setTitle(notification.title)
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId('channelId')
        .android.setPriority(firebase.notifications.Android.Priority.High);

        firebase.notifications().displayNotification(localNotification)
        .catch(err => {
          console.log(err)
        })
      }
    })
  }




  //Notification end

  return (
    <Provider store={store}>
      <MainNavigator /> 
   </Provider>
  );
};



export default App;
