
// import { View, Text, Button } from 'react-native'
// import React, { useEffect , useState} from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'

// const App = () => {
//  const [item, setItem] = useState('');
//   useEffect(() => {
//     getAsyncStorageData();
//   });

//   const getAsyncStorageData = async () => {
//     const value = await AsyncStorage.getItem('data123');
//     if (value != null) {
//       setItem(value);
//     }
//   }
//   const handleStoreToAsync = async() => {
//     const value = 'ABCDEFG';
//     await AsyncStorage.setItem('data123', value);
//     setItem('');
//   }
//   return (
//     <View>
//     <Button title='Save data to async storage' onPress={handleStoreToAsync}/>
//     <Text>{item}</Text>

//  <Text style={{fontSize: 30, fontWeight:'bold', color: 'green'}}>Redux</Text>
//     <Button title='Increment' />
//     <Button title='Decrement' />
//     </View>
//   )
// }

// export default App


import { View, Text } from 'react-native'
import React from 'react'
import Home from './src/components/Home'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
//import { counterReducer } from './src/redux/reducer'
import counterReducer from './src/redux/counterSlice'
//import store from './src/redux/store'

const store = configureStore({
  reducer:{
    counter: counterReducer,
  }
})
const App = () => {
  return (
    <Provider store={store}>
      <Home  />
    </Provider>
  )
}

export default App