import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-ionicons'

export default function Iconbutton({name, style, onPress}) {
   
    return (
        <TouchableOpacity style={[styles.container, style]}>
             <Ionicons onPress={onPress} name={name} size={32} color={'purple'}  />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    container: {
        
    },

})
