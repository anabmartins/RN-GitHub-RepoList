import React, { useState, useEffect } from 'react'
import { View, Text, Image, TextInput } from 'react-native'
import { stylesGlobal } from "../../theme";

export function GitHub() {
    const [nomeUsuario, setNomeUsuario] = useState<string>();
    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState<string>("");

    interface UserData {
        login: string;
        name: string | null; // 'name' pode ser nulo
        public_repos: number;
        followers: number;
        following: number;
    }
    
    useEffect(() => {
        if (nomeUsuario) {
            fetch(`https://api.github.com/users/${nomeUsuario}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
            })
            .catch((error) => {
                setError('Ocorreu um erro na solicitação: ' + error);
            });
        }
    }, [nomeUsuario]);
    return (
        <>
            <View style={stylesGlobal.container}>
                <Image
                    source={require('../../../assets/brand.svg')}
                    style={stylesGlobal.brand}
                />
                <Text style={[stylesGlobal.subtitle]}>Seu nome de usuário</Text>
                <TextInput
                    style={stylesGlobal.inputName}
                    value={nomeUsuario}
                    onChangeText={(text) => setNomeUsuario(text)}
                ></TextInput>
              {userData && (
                <>
                    <Text style={stylesGlobal.response}>Nome: {userData.name}</Text>
                    <Text style={stylesGlobal.response}>Nickname: {userData.login}</Text>
                    <Text style={stylesGlobal.response}>Repositórios: {userData.public_repos}</Text>
                    <Text style={stylesGlobal.response}>Seguidores: {userData.followers}</Text>
                    <Text style={stylesGlobal.response}>Seguindo: {userData.following}</Text>
                </>
            )}
            {error && <Text>{error}</Text>}
            </View>
        </>
    )
}