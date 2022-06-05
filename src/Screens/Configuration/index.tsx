import { Text, View, Switch } from 'react-native'
import { styles } from './styles'
import React, { useState } from 'react'

export default function Configuracao() {
  const [state, setState] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuração</Text>

      <View style={styles.inputArea}>
        <Text style={styles.subTitle}>Tema: Escuro</Text>
        <Switch onValueChange={() => setState(!state)} value={state} />
      </View>
    </View>
  )
}
