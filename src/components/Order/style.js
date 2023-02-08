import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column'
  },
  title: {
    width: '100%',
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
    color: 'black'
  },
  text: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginTop: 10
  },
  itemsContainer: {
    width: '100%',
    flexDirection: 'column'
  },
  items: {
    flexDirection: 'row',
    borderBottomColor: '#cdcbcb',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginHorizontal: 15,
    height: 150
  },
  img: {
    borderRadius: 25,
    height: 100,
    width: 100,
    marginTop: 10,
    marginRight: 10
  },
  info: {
    width: '100%',
    marginTop: 20
  },
  itemsName: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  deliteIcon: {
    paddingLeft: 35
  },
  delite: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  leftInfo: {
    width: '55%'
  },
  textInfoLeft: {
    color: '#888'
  },
  modificationsText: {
    color: 'gray'
  },
  textInfoRight: {
    color: '#888',
    textAlign: 'right'
  },
  price: {
    color: '#0197f6',
    fontSize: 17,
    marginTop: 10,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  containerSummary: {
    margin: 10,
    height: 150,
    flexDirection: 'column'
  },
  check: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: '100%',
    height: '60%',
    borderBottomColor: '#c2c1c1',
    borderBottomWidth: 2,
    backgroundColor: '#ececec'
  },
  leftCheck: {
    width: '80%'
  },
  leftCheckText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'left'
  },
  rightCheckText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right'
  },
  total: {
    borderTopColor: '#c2c1c1',
    borderTopWidth: 2,
    flexDirection: 'row',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
    backgroundColor: '#ececec'
  },
  leftTotal: {
    width: '80%'
  },
  leftTotalText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  rightTotalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'right'
  },
  payContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    height: 50,
    marginHorizontal: 100,
    backgroundColor: '#0197f6'
  },
  payText: {
    color: 'white',
    fontSize: 20
  }
})
