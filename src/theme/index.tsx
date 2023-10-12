import { StyleSheet } from 'react-native'

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#11110F",
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#D9D9D9",
        maxWidth: 263,
        textAlign: "center"
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#D9D9D9",
        maxWidth: 263,
        textAlign: "center"
    },
    logo: {
        width: 85,
        height: 82,
        resizeMode: "contain",
        marginTop: 45,
        marginBottom: 245,
    },
    brand: {
        resizeMode: "contain",
        width: 171,
        height: 46,
        marginBottom: 79
    },
    btn: {
        backgroundColor: "#F5F5F5",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-between",
        marginTop: 20,
        width: 250,
        padding: 10,
        borderRadius: 5,
    },
    btnText: {
        fontSize: 15,
        fontWeight: "bold",
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    inputName: {
        backgroundColor: "#F5F5F5",
        width: 241,
        height: 32,
        borderRadius: 5,
        padding: 10,
        fontSize: 15,
        fontWeight: '600',
        marginTop: 25
    },
    response:{
        backgroundColor: "black",
        width: 241,
        height: 32,
        borderRadius: 5,
        padding: 10,
        fontSize: 15,
        color: "#C9C9C9",
        fontWeight: '600',
        marginTop: 25
    },

})