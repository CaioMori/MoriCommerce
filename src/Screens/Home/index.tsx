import React from 'react'
import { Text, View, FlatList, StatusBar, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { Product } from '../../components'
import { products } from './mocks'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()
  const lastSeen: {
    image: ImageSourcePropType
    text: string
    price: number
  }[] = []

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.areaTitle}>
        <Text style={styles.title}>Olá, NOME</Text>
        <View style={styles.areaCart}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name='cart' size={30} color='#fff' style={styles.cartIcon} />
          </TouchableOpacity>
          <View style={styles.areaCartQuantity}>
            <Text style={styles.cartQuantity}>0</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.areaIcon}>
            <MaterialCommunityIcons name='cog' size={30} color='#fff' style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.text}
        renderItem={({ item }) => <Product item={item} add={true} />}
        style={styles.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {lastSeen.length > 0 && (
              <View style={styles.lastSeen}>
                <Text style={styles.lastSeenTitle}>Últimos vistos</Text>
                <FlatList
                  data={lastSeen}
                  keyExtractor={item => item.text}
                  renderItem={({ item }) => <Product item={item} add={false} />}
                  style={styles.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <Text style={[styles.title, styles.subTitle]}>Produtos</Text>
          </View>
        )}
      />
    </View>
  )
}
