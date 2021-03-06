import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function FilledButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'purple',
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }


})
