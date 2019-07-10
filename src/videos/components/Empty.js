import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Empty(props){
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>{  props.text  ?  props.text : 'no ahi cotenido en este section' }</Text>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    text: {
        fontSize: 16
    }
});