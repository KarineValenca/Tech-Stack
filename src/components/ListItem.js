import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { CardSection } from './common'
import { Context } from '../context/LibraryContext'

const ListItem = ({ library }) => {
    const { state, selectLibrary } = useContext(Context)

    const { id, title } = library

    return (
        <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{title}</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})
export default ListItem