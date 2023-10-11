import React from 'react'
import { View, Text } from 'react-native'
import { stylesGlobal } from "../../theme";

export function GitHub(nome_usuario: String) {

    fetch(`https://api.github.com/users/${nome_usuario}/repos`)
        .then((response) => response.json())
        .then((data) => {
            return (
                <View style={stylesGlobal.data}>
                    <Text>{data}</Text>
                </View>
            )
        })
        .catch((error) => {
            console.error('Ocorreu um erro na solicitação: ' + error);
            <View style={stylesGlobal.warning}>
                <Text>{error}</Text>
            </View>
        });

}