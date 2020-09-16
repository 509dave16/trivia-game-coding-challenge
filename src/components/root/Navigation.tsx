import * as React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Intro from '~components/screens/Intro'
import Quiz from '~components/screens/Quiz'
import Results from '~components/screens/Results'

enableScreens()
const Stack = createNativeStackNavigator()

const commonOptions = { headerShown: false }

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={commonOptions} />
        <Stack.Screen name="Quiz" component={Quiz} options={commonOptions} />
        <Stack.Screen name="Results" component={Results} options={commonOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation