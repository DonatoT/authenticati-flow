import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function Input({style, ...props}) {
    return <TextInput {...props} style={[style, styles.input]}></TextInput>
}

const styles = StyleSheet.create({

    input:{
        backgroundColor: '#ccc',
        width: '100%',
        padding: 20,
        borderRadius: 8
    }
})
