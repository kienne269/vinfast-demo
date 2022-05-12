import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ label, onPress, disabled}) => {
  return (
    <TouchableOpacity
        style={{
            borderRadius: 8,
            height: 50,
            width: 245,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: disabled ? '#979797' : '#1464f4'
        }}
        activeOpacity={0.7}
        onPress={onPress}
        disabled={disabled}
    >
        <Text
            style={{fontSize: 18, fontWeight: '700', color: '#fff', textTransform: 'uppercase'}}
        >
            {label}
        </Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})