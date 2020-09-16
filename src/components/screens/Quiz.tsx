import * as React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'material-bread'

function Quiz({ navigation }) {
  const goToResults = React.useCallback(() => navigation.navigate('Results'), [])
  return (
    <SafeAreaView>
      <Text>Quiz screen!</Text>
      <Button onPress={goToResults} text="Go To Results" />
    </SafeAreaView>
  )
}

export default Quiz