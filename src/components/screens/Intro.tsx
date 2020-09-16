import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Heading from '~components/widgets/Heading'
import Button from '~components/widgets/Button'

import sharedStyles from '~config/sharedStyles'

function Intro({ navigation }) {
  const goToQuiz = React.useCallback(() => navigation.navigate('Quiz'), [])
  return (
    <SafeAreaView style={[sharedStyles.screenPadding, sharedStyles.spaceBetweenVertically]}>
      <Heading style={sharedStyles.textTitle} text="Welcome to the Trivia Challenge!" />
      <Heading text="You will be presented with 10 True or False questions." />
      <Heading text="Can you score 100%?" />
      <Button onPress={goToQuiz} text="BEGIN" />
    </SafeAreaView>
  )
}

export default Intro