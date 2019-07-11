import React , {Component} from 'react';
import { View, Text , Image, StyleSheet} from 'react-native';

export default function Categories(props){
    return(
        <View style={styles.contant}>
            <View style={styles.Contenimg}>
                <Image style={styles.img}
                    source={props.img ?{uri: props.img} : require('../../../assets/React.png')}
                />
                <Text style={styles.texto}>{props.title}</Text>
                <Text style={styles.gender}>{props.gender}</Text>
            </View>
           
            <View style={styles.rating}>
                <Text style={styles.text}>★ {props.rating}</Text>
            </View>
        </View>
        
    )
}
const styles = StyleSheet.create({
    contant: {
       textAlign: 'left',
       fontSize: 10,
       marginHorizontal: 12,
       borderRadius: 10, 
    }, 
 
    img: {
        width: 100,
        height: 150,
        borderRadius: 10,
        
    },
    texto: {
        width: 100,
        height: 15,
        textAlign: 'left',
        fontSize: 13,
        paddingHorizontal: 5,
        marginBottom: 5
    },
    gender:{
        fontSize: 10, 
        fontWeight: '600',
        paddingHorizontal: 5
        
    },
    rating:{
        backgroundColor: '#FFBF00',
        borderRadius: 40,
        width: 40,
        textAlign: 'center',
        marginTop: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 10
        
    }
})