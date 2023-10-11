import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { stylesGlobal } from '../../theme';

export function About() {
  return (
    <View style={styles.container}>
        <Text style={stylesGlobal.title}>Consumo de Rotas de API em React Native</Text>
    </View>
  );
}