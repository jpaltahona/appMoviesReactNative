import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Separator(props){
    return(
        <View style={[Styles.separator, 
        {
            borderTopColor: (props.color) ? props.color : '#eaeaea'
        }
        ]}>
           
        </View>
    )
}
const Styles = StyleSheet.create({
    separator: {
        borderTopWidth: 0,
        marginVertical: 7
    }
})