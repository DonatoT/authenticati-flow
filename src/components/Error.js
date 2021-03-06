import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Error({error}) {
    return (
           <View style={styles.container}>
                <Text style={styles.text}>{error}</Text>
           </View>
    )
}

const styles = StyleSheet.create({

    container:{
        paddingVertical: 10
    },
    text: {
        color: 'red',
        fontWeight: 'bold'
    },
})
