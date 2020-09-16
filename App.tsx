import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { BreadProvider } from 'material-bread'

import Navigation from '~components/root/Navigation'
import theme from '~config/theme'

export default function App() {
  return (
    <SafeAreaProvider>
      <BreadProvider value={theme}>
        <Navigation />
      </BreadProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  )
}