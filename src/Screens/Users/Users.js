import { Fragment, useEffect, useState } from "react"
import { UserActions } from "../../NetworkActions/UserActions"
import { View, Text, FlatList, SafeAreaView, StyleSheet, Button, TouchableOpacity } from "react-native"
import { UsersList } from "../../Components/UsersList/UsersList"
import { PrimaryButton } from "../../Components/UsersList/PrimaryButton/PrimaryButton"


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

            <PrimaryButton onPress={addUser} title='Add User' />
            <PrimaryButton onPress={updateStreet} title='Update Street' />

        </Fragment>


    )
}





