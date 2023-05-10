import { StyleSheet, Text, TouchableOpacity } from "react-native/types"


export const PrimaryButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#841584",
        marginVertical: 10,
        height: 50,
        alignItems: "center",
        justifyContent: "center"

    },

    buttonTitle: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: "bold"
    }

});
