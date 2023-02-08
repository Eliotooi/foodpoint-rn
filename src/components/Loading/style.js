import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 10,
    color: 'black'
  },
  logo: {
    height: 100,
    width: 100
  },
  title: {
    color: 'black',
    paddingLeft: 5,
    fontSize: 24,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  }
})
