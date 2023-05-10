import { Fragment, useEffect, useState } from "react"
import { UserActions } from "../../NetworkActions/UserActions"
import { View, Text, FlatList, SafeAreaView, StyleSheet, Button, TouchableOpacity } from "react-native"
import { UsersList } from "../../Components/UsersList/UsersList"


export const Users = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = async () => {
        try {

            const res = await UserActions.getUsers()
            setUser(res)
        }
        catch (err) {
            console.log(err)
        }
    }

    const onDelete = (id) => {
        const updatedUsers = user?.filter(u => u?.id !== id)
        setUser(updatedUsers)

    }

    const addUser = () => {
        const newUser = {
            id: 100,
            username: 'Dummy User',
            address: {
                street: 'XYZ'
            }
        }

        setUser(prev => [...prev, newUser])

    }

    const updateStreet = () => {

        const userStreetIndex = user.findIndex(u => u?.id === 2);
        let newUserArray = [...user]
        newUserArray[userStreetIndex] = { ...newUserArray[userStreetIndex], address: { ...newUserArray[userStreetIndex]?.address, street: 'New Street' } }
        setUser(newUserArray)
    }

    return (
        <Fragment>
            <FlatList
                data={user}
                renderItem={({ item }) => <UsersList item={item} onDelete={onDelete} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    // flexGrow: 1,
                    marginBottom: 250,
                }}
            />

            <TouchableOpacity onPress={addUser} style={styles.button}>
                <Text style={styles.buttonTitle}>Add User</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={updateStreet} style={styles.button}>
                <Text style={styles.buttonTitle}>Update Street</Text>
            </TouchableOpacity>

        </Fragment>


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



