import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { GitHub } from '../../components/GitHubAPI';
import { styles } from './styles';

export function Home() {
  const [isVisibleHome, setVisibleHome] = useState<boolean>(true);
  const [isVisibleGithubAPI, setVisibleGithubAPI] = useState<boolean>(false);

  const viewGithub = () => {
    setVisibleHome(false)
    setVisibleGithubAPI(true)
  }

  return (
    <>
      {isVisibleHome && (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de repositórios do GitHub</Text>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.svg')}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={viewGithub}
            >
            <Text
              style={styles.btnText}>Listar repositórios
            </Text>
            <Image
              style={styles.icon}
              source={require('../../../assets/arrow.svg')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
          >
            <Text
              style={styles.btnText}>Entenda a API
            </Text>
            <Image
              style={styles.icon}
              source={require('../../../assets/arrow.svg')}
            />
          </TouchableOpacity>
        </View>
      )}
      {isVisibleGithubAPI && (
        <View style={styles.container}>
           <GitHub  /> 
        </View>
      )}

    </>
  );
}