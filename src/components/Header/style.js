import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    paddingTop: 25,
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  logo: {
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    borderRadius: 25
  }
})
