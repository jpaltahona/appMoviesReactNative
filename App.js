import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/suggestionsList';
import Api from './utils/api';

export default class App extends Component {

  componentDidMount(){
    Api.getSuggestion(20);
  }
  render(){
    return (
      <View>
        <Home>
          <Header>
              <Text>hola que ahces</Text>
          </Header>
          
          <Text style={styles.texto}>buscador</Text>
          <Text style={styles.texto}>Categorias</Text>
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
