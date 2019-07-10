import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Suggestions(props){
    return(
        <View style={Styles.container}>
            <View style={Styles.left}>
                <Image
                    style={Styles.cover}
                    source={props.img ?{uri: props.img} : require('../../../assets/React.png')}
                />
            </View>
            <View style={Styles.right}>
                <Text style={Styles.title}>{props.title}</Text>
                <Text style={Styles.year}>2007</Text>
                <Text style={Styles.rating}>{props.llave}</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        flex: 1,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 4.11,
        
        elevation: 1,
    },

    genre: {
     
    },
    genreText: {
      
  
    },
    cover: {
      height: 100,
      width: 160,
      resizeMode: 'cover',
      marginRight: 8,
      borderRadius: 10
    },
    left: {
        flex: 1,
    },
    right: {
        flex: 1,
      paddingLeft: 10,
      justifyContent: 'space-between',

    },
    title: {
      fontSize: 18,
      color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
      
    }
  
  })