import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-default'

import { updateSearchText } from '../../redux/actions'
import styles from './style'

function Search() {
  const [value, setValue] = React.useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      dispatch(updateSearchText(''))
    }
  }, [dispatch])

  const setSearchText = (newSearchText) => {
    setValue(newSearchText)
    dispatch(updateSearchText(newSearchText))
  }

  return (
    <SearchBar
      platform='android'
      containerStyle={styles.searchBarContainer}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.inputStyle}
      onChangeText={(newText) => setSearchText(newText)}
      onClearText={() => setSearchText('')}
      placeholder='Search menu...'
      placeholderTextColor='#888'
      cancelButtonTitle='Cancel'
      value={value}
    />
  )
}

export default Search
