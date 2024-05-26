import 'react-native-gesture-handler';
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main_Navigation from './src/AppNavigation/MainNavigation';
const App=()=>{
  return(
    <GestureHandlerRootView style={{flex: 1}}>
    <Main_Navigation/>
    </GestureHandlerRootView>
  )
}
export default App