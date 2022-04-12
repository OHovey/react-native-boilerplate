import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import ClockedIn from 'pages/ClockedIn';
import Profile from 'pages/Profile'
import Organization from 'pages/Organization';
import Details from 'pages/Details'
import Login from 'pages/Login';
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerShown: false
  // headerTintColor: 'white',
  // headerStyle: { backgroundColor: colors.darkPurple },
  // headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="ClockedIn"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="ClockedIn"
      component={ClockedIn}
      options={({ navigation }) => ({
        title: 'ClockedIn',
        // headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={({ navigation }) => ({
        title: 'Details',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Organization"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Organization"
      component={Organization}
      options={({ navigation }) => ({
        title: 'Organizations',
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const LoginNavigator = () => (
  <Stack.Navigator
    initialRouteName="Login"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={({ navigation }) => ({
        title: 'Login',
        headerTitle: () => <HeaderTitle />
      })}
    />
  </Stack.Navigator>
)
