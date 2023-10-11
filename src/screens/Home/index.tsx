import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { GitHub } from '../../components/GitHubAPI';
import { styles } from './styles';
import { stylesGlobal } from '../../theme';

export function Home() {
    const [ nomeUsuario, setNomeUsuario ] = useState<string>("");

    function handleInputChange(event){
        setNomeUsuario((prevState: string) => ({
            ...prevState,
            nomeUsuario: event.target.value,
          }));
        
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>My GitHub Repositories</Text>
        <TextInput 
        style={stylesGlobal.input}
        placeholder='Seu usuario do GitHub'
        value={nomeUsuario}
        onChange={handleInputChange}
        />
        <GitHub  />
    </View>
  );
}