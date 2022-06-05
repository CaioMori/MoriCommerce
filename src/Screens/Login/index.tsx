import { useNavigation } from '@react-navigation/native'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native'
import AuthContext from '../../contexts/auth'
import ThemeContext from '../../contexts/theme'
import { styles } from './styles'

export default function Login() {
  const navigation = useNavigation()
  const theme = useContext(ThemeContext)
  const auth = useContext(AuthContext)

  const style = styles(theme.theme)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    auth.login({
      name: 'Caio Mori',
      email,
      password,
    })
      ? navigation.navigate('Home')
      : Alert.alert('Login inválido')
  }

  return (
    <View style={style.container}>
      <StatusBar />
      <Text style={style.title}>Login</Text>

      <View style={style.inputArea}>
        <TextInput style={style.input} placeholder='Email' placeholderTextColor='#999' autoCapitalize='none' value={email} onChangeText={setEmail} />
        <TextInput style={style.input} placeholder='Senha' placeholderTextColor='#999' autoCapitalize='none' value={password} onChangeText={setPassword} secureTextEntry />
      </View>

      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.textButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  )
}
