
import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import FriendsList from './FriendsList';
import Setting from './Setting';
import MovieListScreen from './MovieListScreen';
import HomeScreen from './HomeScreen';
import WriteReviewScreen from './WriteReviewScreen';
import { View } from 'react-native';

let headerTitle = 'Home';

// const HomeScreenTopTabStack = createMaterialTopTabNavigator({
//   Movies: {
//     screen: HomeScreen, navigationOptions: ({ navigation }) => {
//       return {
//         tabBarLabel: 'Movies',
//         tabBarOnPress:({navigation,defaultHandler})=>{
//           navigation.navigate('Movies');
//         }
//       };
//     }
//   },
//   TVShows: {
//     screen: HomeScreen, navigationOptions: ({ navigation }) => {
//       return {
//         tabBarLabel: 'TV Shows',
//         tabBarOnPress:({navigation,defaultHandler})=>{
//           navigation.navigate('TVShows');
//         }
//       };
//     }
//   }
// })


const DashboardTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen, navigationOptions: ({ navigation }) => {
      return {
        headerStyle: {height: 60},
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => {
          if(focused){
            headerTitle = 'Home'
          }
          return (
            <Ionicons
              name={focused ? 'ios-home' : 'ios-home'}
              size={26}
              style={{ color: tintColor }}
            />
          )
        },
        tabBarOnPress:({defaultHandler})=>{
          headerTitle = 'Home';
          defaultHandler();
      }
      };
    }
  },
  Friends: {
    screen: FriendsList, navigationOptions: ({ navigation }) => {
      headerTitle = 'Friends';
      return {
        headerTitle:'Friends',
        headerStyle: {height: 60},
        tabBarLabel: 'Friends',
        tabBarIcon: ({ tintColor, focused }) => {
          if(focused){
            headerTitle = 'Friends'
          }
          return (
          <Ionicons
            name={focused ? 'ios-contacts' : 'ios-contacts'}
            size={26}
            style={{ color: tintColor }}
          />
        )},
        tabBarOnPress:({defaultHandler})=>{
          headerTitle = 'Friends';
          defaultHandler();
      }
      };
    }
  },
},
);

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator,
},
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={190}
          />
        ),
        headerRight:(<Ionicons
            style={{paddingRight:10}}
            name={'md-search'}
            size={35}
          />
        ),
        headerTitle:headerTitle,
        headerStyle: {height: 60}
      };
    }
  })

 

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

export default AppDrawerNavigator;

{/* <View style={{ flexDirection: 'row'}}>
            <Icon
              style={{ paddingLeft: 10 }}
              onPress={() => navigation.openDrawer()}
              name="md-menu"
              size={30}
            />
            <MaterialIcons
              style={{ marginRight: 10 }}
              name="library-add"
              size={30}
            />
          </View> */}


          // WriteReview: {
          //   screen: WriteReviewScreen, navigationOptions: ({ navigation }) => {
          //     return {
          //       headerTitle: 'Write review',
          //       headerRight:null,
          //       headerLeft: (
          //         <AntDesignIcon
          //           style={{ paddingLeft: 30 }}
          //           onPress={() => navigation.pop()}
          //           name="arrowleft"
          //           size={20}
          //         />
          //       )
          //     };
          //   }
          // }

          // Settings: {
          //   screen: Setting, navigationOptions: ({ navigation }) => {
              
          //     return {
          //       headerTitle:'Write review',
          //       tabBarLabel: 'Write review',
          //       tabBarIcon: ({ tintColor, focused }) => {
          //         let icon = (<AntDesign
          //           name={focused ? 'edit' : 'edit'}
          //           size={26}
          //           style={{ color: tintColor }}
          //           />);;
          //         if(headerTitle === 'Write review'){
          //            icon = null;
                     
          //         }
        
          //         console.log(headerTitle);
                  
          //         return icon;
          //       },
          //       tabBarOnPress:({defaultHandler})=>{
          //           headerTitle = 'Write review'
          //           defaultHandler();
          //       }
          //     };
          //   }
          // },