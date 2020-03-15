import React, { useContext, useEffect } from 'react'
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View
} from 'react-native'
import { CardSection } from './common'
import { Context } from '../context/LibraryContext'



const ListItem = ({ library }) => {
    const { state, selectLibrary } = useContext(Context)

    const { id, title, description } = library



    const renderDescription = () => {
        if (id === state.selectedLibrary) {
            return (
                <CardSection>
                    <Text style= {{ flex: 1}}>{description}</Text>
                </CardSection>
            )
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{title}</Text>
                </CardSection>
                {renderDescription()}
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