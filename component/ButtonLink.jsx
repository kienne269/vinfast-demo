import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';

const ButtonLink = ({ label, style, screen, params}) => {
  return (
    <View
        style={[
            {
                borderRadius: 8,
                height: 50,
                width: 245,
                justifyContent: 'center',
                alignItems: 'center',
            },
            style
        ]}
    >
        <Link to={{ screen: screen, params: params }}>
            <Text
                style={{fontSize: 18, fontWeight: '700', color: '#fff', textTransform: 'uppercase'}}
            >
                {label}
            </Text>
        </Link>
    </View>
  )
}

export default ButtonLink

const styles = StyleSheet.create({})