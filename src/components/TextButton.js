import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },

    text: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 13
    }


})
