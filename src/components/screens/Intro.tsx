import * as React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from 'material-bread'

function Intro({ navigation }) {
  const goToQuiz = React.useCallback(() => navigation.navigate('Quiz'), [])

  return (
    <SafeAreaView>
      <Text>Intro screen!</Text>
      <Button onPress={goToQuiz} text="Go To Quiz" />
    </SafeAreaView>
  )
}

export default Intro