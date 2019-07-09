import React from 'react';
import { Text , View, SafeAreaView, Image, StyleSheet,} from 'react-native';

export default function Header(props) {
    return(
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image source={require('../../../assets/React.png')}  style={styles.logo}/>
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
               
            </SafeAreaView>
        </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    right: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
    }
  });