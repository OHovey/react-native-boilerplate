import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'
import TabNavigator from './Tabs';
import DrawerNavigator from './Drawer'

const Navigator = () => {
  const { checked, premiumUser, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  const checkIsLoggedIn = (userId) => {

  }

  useEffect(() => {
    dispatch(authenticate({ loggedIn, premiumUser, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  // console.log('[##] loggedIn', loggedIn)

  return checked ? (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
