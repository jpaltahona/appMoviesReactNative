import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/suggestionsList';

export default class App extends Component {
  render(){
    return (
      <View>
        <Home>
          <Header>
              <Text>hola que ahces</Text>
          </Header>
          
          <Text style={styles.texto}>buscador</Text>
          <Text style={styles.texto}>Categorias</Text>
          <Text style={styles.texto}>Sugerencias</Text>
          <SuggestionsList />
        </Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: '#000'
  }
});
