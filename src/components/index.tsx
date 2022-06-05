import React from 'react'
import { Text, View, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { styles } from './styles'

interface Props {
  item: {
    text: string
    image: ImageSourcePropType
    price: number
  }
  add: boolean
}

export function Product({ item, add }: Props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={1}>
          {item.text}
        </Text>
        <Text style={styles.price}>R$ {item.price}</Text>
      </View>
      {add && (
        <TouchableOpacity style={styles.addButton} onPress={() => {}}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
