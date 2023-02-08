import React from 'react'
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet
} from 'react-native'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { Loading } from '../components/Loading/Loading'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Switcher from '../components/Switcher/Switcher'
import { searchTextSelector, typeSelector } from '../redux/selectors'

export default function ItemsList({ navigation }) {
  const [items, setItems] = React.useState({})
  const [isLoading, setIsLoading] = React.useState(true)
  const searchText = useSelector(searchTextSelector)
  const type = useSelector(typeSelector)

  const fetchPosts = () => {
    setIsLoading(true)
    axios
      .get('https://637cf29416c1b892ebc3bf80.mockapi.io/Test', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(({ data }) => {
        const item = data.sort(() => Math.random() - 0.5)

        setItems(item)
        setIsLoading(false)
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(err, null, 2))
      })
  }

  React.useEffect(fetchPosts, [])

  const onItemPress = (url, title, price, stock, id) => {
    navigation.navigate('ItemDetails', url, title, price, stock, id)
  }

  if (isLoading) {
    return <Loading />
  }

  const filteredItems = type.trim()
    ? items.filter((el) => el.type === type)
    : items

  const searchResults = searchText.trim()
    ? filteredItems.filter((el) =>
        el.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : filteredItems

  return (
    <View style={styles.conteiner}>
      <Header />
      <Search />
      <Switcher />
      <FlatList
        style={styles.flatList}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchPosts}
          />
        }
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.containerMenu}>
            <Menu
              onItemPress={() =>
                onItemPress({
                  url: item.imageUrl,
                  title: item.title,
                  price: item.price,
                  stock: item.stock,
                  type: item.type,
                  id: item.id
                })
              }
              itemInfo={item}
            />
          </View>
        )}
        numColumns={2}
        key={(item) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerMenu: {
    marginTop: 20,
    width: '50%'
  },
  title: {
    paddingTop: 20,
    paddingLeft: 15,
    width: '100%',
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  }
})
