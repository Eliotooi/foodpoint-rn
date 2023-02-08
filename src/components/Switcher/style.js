import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  img: {
    marginRight: 5,
    width: 25,
    height: 25,
    marginVertical: 10
  },
  container: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    marginBottom: 5
  },
  switchContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: 'center'
  },
  allType: {
    marginHorizontal: 15,
    marginTop: 5,
    width: 100,
    height: 25,
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 25
  },
  switcherTextContainerStyle: {
    borderColor: '#888',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    marginHorizontal: 5
  },
  switcherSelectedTextContainerStyle: {
    marginHorizontal: 5,
    width: 100
  },
  allTypeText: {
    marginTop: 4,
    fontSize: 12,
    color: 'white'
  }
})
