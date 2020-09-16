import * as React from 'react'
import { GestureResponderEvent, View } from 'react-native'
import { Button, withTheme } from 'material-bread'

import sharedStyles from '~config/sharedStyles'

interface ButtonProps {
  theme: any;
  onPress: (e: GestureResponderEvent) => void;
  text: string;
}

export default withTheme(({ theme, onPress, text }: ButtonProps) => (
  <View style={sharedStyles.centerHorizontally}>
    <Button
      type="contained"
      style={[{ backgroundColor: theme.containedButton.backgroundColor }]}
      textStyle={[{ fontSize: theme.headingFive.fontSize }]}
      onPress={onPress} text={text}
    />
  </View>
))