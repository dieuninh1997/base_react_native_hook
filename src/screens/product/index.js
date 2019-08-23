import React, { useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../../redux/reducers/product'

export default (props) => {
  console.tron.log({ props })
  const { navigation } = props
  const dispatch = useDispatch()

  const product = useSelector((state) => state)


  useEffect(() => {
    console.tron.log({ haha: 'Hahaha' })
    dispatch(getProduct({ token: 'assasas' }, () => {

    }))
  }, [])

  const handleOpenDetail = () => {
    navigation.navigate('ProductDetailScreen')
  }
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <TouchableOpacity onPress={handleOpenDetail}>
        <Text>Open detail</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
