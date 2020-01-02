import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Welcome from './src/screens/Welcome';
import AppDrawer from './src/screens/AppDrawer';

//https://api.themoviedb.org/3/search/multi?api_key=0dc362bcb49f2bcff527cd9e0a44cd4f&language=en-US&query=dream%20girl&page=1&include_adult=false

//emulator-5554	device
const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen:Welcome},
  Home:{screen:AppDrawer}
},{
  initialRouteName:'Welcome'
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppContainer/>;
}

