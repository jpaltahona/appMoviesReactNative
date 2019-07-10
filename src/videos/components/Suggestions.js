import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Suggestions(props){
    return(
        <View style={Styles.container} key={props.id}>
            <View style={Styles.left}>
                <Image
                    style={Styles.cover}
                    source={props.img ?{uri: props.img} : require('../../../assets/React.png')}
                />
            </View>
            <View style={Styles.right}>
                <Text style={Styles.title}>{props.title}</Text>
                <Text style={Styles.despc}>{props.synopsis}</Text>
                <Text style={Styles.year}>{props.year}</Text>
                <Text style={Styles.rating}>{props.llave}</Text>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 20,
        marginHorizontal: 15,
        marginTop: 7,
        flex: 1,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.109,
        shadowRadius: 10,

        elevation: 1,
    },
    despc:{
        height:  50
    },
    cover: {
      height: 115,
      width: 160,
      resizeMode: 'cover',
      marginRight: 20,
      borderRadius: 20
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
      color: '#44546b',
      fontWeight: '500',
      marginBottom: 5
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