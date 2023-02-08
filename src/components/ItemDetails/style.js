import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%'
  },
  item: {
    flexDirection: 'column'
  },
  logo: {
    width: '100%',
    height: 300
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'black'
  },
  itemInfo: {
    flexDirection: 'row'
  },
  price: {
    paddingLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0197f6',
    width: '75%'
  },
  stock: {
    fontSize: 16,
    color: '#888'
  },
  settings: {
    flexDirection: 'column'
  },
  options: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingVertical: 10
  },
  input: {
    marginHorizontal: 20,
    color: 'black',
    paddingLeft: 10,
    borderRadius: 30,
    borderColor: '#888',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  orderBtn: {
    paddingHorizontal: 80,
    width: '100%',
    marginVertical: 20
  },
  // Switcher
  switcherContainer: { paddingHorizontal: 20 },
  switcherTextContainerStyle: {
    borderColor: '#888',
    borderWidth: 1,
    height: 45,
    borderStyle: 'solid',
    borderRadius: 30,
    marginHorizontal: 5
  },
  switcherSelectedTextContainer: { marginHorizontal: 5 }
})
