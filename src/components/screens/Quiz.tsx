import * as React from 'react'
import { View, StyleSheet, Dimensions,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Subtitle, Card, CardContent } from 'material-bread'

import Heading from '~components/widgets/Heading'
import Button from '~components/widgets/Button'
import Spacer from '~components/widgets/Spacer'

import sharedStyles from '~config/sharedStyles'

const cardHeight = Dimensions.get('screen').height / 3

function Quiz({ navigation }) {
  const goToResults = React.useCallback(() => navigation.navigate('Results'), [])
  return (
    <SafeAreaView style={[sharedStyles.screenPadding, sharedStyles.spaceBetweenVertically]}>
      <Heading style={sharedStyles.textTitle} text="Entertainment: Video Games" />
      <View>
        <Card style={[{ height: cardHeight }, sharedStyles.centerVertically]}>
          <CardContent>
            <Heading text="Unturned originally started as a Roblox game." />
          </CardContent>
        </Card>
        <Spacer />
        <Subtitle style={sharedStyles.textCenter} type={1} text="1 of 10" />
      </View>
      <View>
        <Button onPress={goToResults} text="TRUE" />
        <Spacer />
        <Button onPress={goToResults} text="FALSE" />
      </View>
    </SafeAreaView>
  )
}

export default Quiz