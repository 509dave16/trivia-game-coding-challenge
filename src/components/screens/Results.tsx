import * as React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'material-bread'

function Results({ navigation }) {
  const goToIntro = React.useCallback(() => navigation.navigate('Intro'), [])
  return (
    <SafeAreaView>
      <Text>Results screen!</Text>
      <Button onPress={goToIntro} text="Go to Intro" />
    </SafeAreaView>
  )
}

export default Results