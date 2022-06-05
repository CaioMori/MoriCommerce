import React from 'react'
import { Text, View, FlatList, StatusBar, TouchableOpacity, ImageSourcePropType } from 'react-native'
import { Product } from '../../components'
import { products } from './mocks'
import { styles } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
import GlobalContext from '../../contexts/global'
import ThemeContext from '../../contexts/theme'

export default function Home() {
  const navigation = useNavigation()
  const context = useContext(GlobalContext)
  const theme = useContext(ThemeContext)
  const style = styles(theme.theme)

  const lastSeen: {
    image: ImageSourcePropType
    text: string
    price: number
  }[] = []

  return (
    <View style={style.container}>
      <StatusBar />
      <View style={style.areaTitle}>
        <Text style={style.title}>Olá, {context.user.name}</Text>
        <View style={style.areaCart}>
          <TouchableOpacity onPress={() => {}}>
            <MaterialCommunityIcons name='cart' size={30} color='#fff' style={style.cartIcon} />
          </TouchableOpacity>
          <View style={style.areaCartQuantity}>
            <Text style={style.cartQuantity}>0</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Configuration')} style={style.areaIcon}>
            <MaterialCommunityIcons name='cog' size={30} color='#fff' style={style.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={products}
        keyExtractor={item => item.text}
        renderItem={({ item }) => <Product item={item} add={true} />}
        style={style.lista}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            {lastSeen.length > 0 && (
              <View style={style.lastSeen}>
                <Text style={style.lastSeenTitle}>Últimos vistos</Text>
                <FlatList
                  data={lastSeen}
                  keyExtractor={item => item.text}
                  renderItem={({ item }) => <Product item={item} add={false} />}
                  style={style.lista}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <Text style={[style.title, style.subTitle]}>Produtos</Text>
          </View>
        )}
      />
    </View>
  )
}
