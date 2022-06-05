import { Text, View, Switch } from 'react-native'
import { styles } from './styles'
import React, { useContext } from 'react'
import ThemeContext from '../../contexts/theme'

export default function Configuration() {
  const theme = useContext(ThemeContext)

  const style = styles(theme.theme)

  return (
    <View style={style.container}>
      <Text style={style.title}>Configuração</Text>

      <View style={style.inputArea}>
        <Text style={style.subTitle}>Tema: {theme.name}</Text>
        <Switch onValueChange={() => theme.setTheme(theme.name === 'dark' ? 'light' : 'dark')} value={theme.name === 'light' ? true : false} />
      </View>
    </View>
  )
}
