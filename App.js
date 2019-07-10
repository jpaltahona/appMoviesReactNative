import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/suggestionsList';
import Api from './utils/api';

export default class App extends Component {

  constructor(props){
    super();
    this.state = {
      suggestionsList: []
    }
  }
  async componentDidMount(){
    const movies = await Api.getSuggestion(20);
    console.log(movies)
    this.setState({
      suggestionsList: movies.movies 
    })
  }
  render(){
    return (
      <View style={styles.app}>
        <Home>
          <Header>
              <Text>hola que ahces</Text>
          </Header>
          <View style={styles.top}>
            <Text style={styles.texto}>buscador</Text>
            <Text style={styles.texto}>Categorias</Text>
          </View>
          
          <View style={styles.contensu}>
              <SuggestionsList
                list={this.state.suggestionsList}
              />
          </View>
        </Home>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: '#000'
  },
  app: {
    flex:1,
    backgroundColor: '#382386'
  },
  contensu: {
    flex: 7,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
    marginTop: 20
  },
  top:{
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10
  }

});
