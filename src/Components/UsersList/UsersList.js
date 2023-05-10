import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const UsersList = ({ item, onDelete }) => {


    const { username, address } = item || {}
    const { street } = address || {}



    const deleteHandler = () => {
        onDelete(item?.id)
    }
    return (
        <View style={styles.item}>
            <Text style={styles.title}>
                {username}
            </Text>
            <Text>
                {street}
            </Text>

            <TouchableOpacity onPress={deleteHandler} style={styles.button}>
                <Text style={styles.buttonTitle}>Delete</Text>
            </TouchableOpacity>

        </View>

    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f7c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    title: {
        fontSize: 14,
    },
    button: {
        backgroundColor: "#841584",
        marginVertical: 10,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        width: 50

    },

    buttonTitle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: "bold"
    }
});
