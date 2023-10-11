import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { GitHub } from '../../components/GitHubAPI';
import { styles } from './styles';

export function Home() {
    const [ nomeUsuario, setNomeUsuario ] = useState("");

    function handleInputChange(field: string, value: string){
        setNomeUsuario({nomeUsuario, [field]: value})
    }
    
  return (
    <View style={styles.container}>
        <Text style={styles.title}>My GitHub Repositories</Text>
        <TextInput placeholder='Seu usuario do GitHub'></TextInput>
        <GitHub  />
    </View>
  );
}