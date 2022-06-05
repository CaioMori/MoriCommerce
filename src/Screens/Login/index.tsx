import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import ThemeContext from '../../contexts/theme'
import { styles } from './styles'

export default function Login() {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)

  const style = styles(theme.theme)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.title}>Login</Text>

      <View style={style.inputArea}>
        <TextInput style={style.input} placeholder='Email' placeholderTextColor='#999' autoCapitalize='none' value={email} onChangeText={setEmail} />
        <TextInput style={style.input} placeholder='Senha' placeholderTextColor='#999' autoCapitalize='none' value={password} onChangeText={setPassword} />
      </View>

      <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Home')}>
        <Text style={style.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
