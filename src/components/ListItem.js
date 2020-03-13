import React from 'react'
import { Text,StyleSheet } from 'react-native'
import { CardSection } from './common'
import detailResult from '../hooks/detailResult'

const ListItem = ({ library }) => {
    
    return (
        <CardSection>
            <Text style={styles.titleStyle}>{library.title}</Text>
        </CardSection>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})
export default ListItem