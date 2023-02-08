import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderStyle: 'solid',
    borderColor: '#ebeaea',
    borderWidth: 1,
    width: '100%',
    flexDirection: 'column',
    height: 250,
    marginHorizontal: 5
  },
  img: {
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: '100%',
    height: '60%'
  },
  disabled: {
    backgroundColor: 'white',
    borderRadius: 25,
    width: '100%',
    opacity: 0.5,
    flexDirection: 'column',
    height: 250
  },
  titleItem: {
    fontSize: 17,
    paddingHorizontal: 6,
    paddingVertical: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 7
  },
  price: {
    paddingLeft: 6,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0197f6'
  },
  stock: {
    fontSize: 16,
    color: '#888'
  }
})
