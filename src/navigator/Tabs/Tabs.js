import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { useSelector, useStore } from 'react-redux';
// stack navigators
import { HomeNavigator, ProfileNavigator, LoginNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {

  const store = useStore();
  const loggedIn = useSelector((state) => state.app.loggedIn);

  if (loggedIn)
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/prop-types

          tabBarIcon: ({ focused }) => {
            switch (route.name) {
              case 'ClockedIn':
                return (
                  <FontIcon
                    name="home"
                    color={focused ? colors.lightPurple : colors.gray}
                    size={20}
                    solid
                  />
                )
              case 'Organizations':
                return (
                  <FontIcon
                    name="user"
                    color={focused ? colors.lightPurple : colors.gray}
                    size={20}
                    solid
                  />
                )
              default:
                return <View />
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.lightPurple,
          inactiveTintColor: colors.gray,
          style: {
            // backgroundColor: 'white',
            // borderTopColor: 'gray',
            // borderTopWidth: 1,
            // paddingBottom: 5,
            // paddingTop: 5,
          },
        }}
        initialRouteName="ClockedIn"
        swipeEnabled={false}
      >
        <Tab.Screen name="ClockedIn" component={HomeNavigator} />
        <Tab.Screen name="Organizations" component={ProfileNavigator} />
      </Tab.Navigator>
    )

  console.log('not logged in')

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types

        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Login':
              return (
                <FontIcon
                  name="home"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            case 'Sign Up':
              return (
                <FontIcon
                  name="user"
                  color={focused ? colors.lightPurple : colors.gray}
                  size={20}
                  solid
                />
              )
            default:
              return <View />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.lightPurple,
        inactiveTintColor: colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        },
      }}
      initialRouteName="Home"
      swipeEnabled={false}
    >
      <Tab.Screen name="Login" component={LoginNavigator} />
      <Tab.Screen name="Sign Up" component={ProfileNavigator} />
    </Tab.Navigator>
  )
}

export default TabNavigator
