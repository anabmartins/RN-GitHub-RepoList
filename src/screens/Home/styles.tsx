import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    logo: {
        width: 85,
        height: 82,
        resizeMode: "contain",
        marginTop: 45,
        marginBottom: 245,
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
    }
})