import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  screenPadding: {
    paddingHorizontal: 50,
    paddingVertical: 25,
  },
  textCenter: {
    textAlign: 'center'
  },
  textTitle: {
    fontWeight: '700',
  },
  spaceBetweenVertically: {
    flex: 1,
    justifyContent: 'space-between',
  },
  centerHorizontally: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centerVertically: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
})