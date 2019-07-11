import React , {Component} from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

import Home from './src/screens/containers/home';
import Header from './src/sections/components/Header';
import SuggestionsList from './src/videos/containers/suggestionsList';
import CategoriesList from './src/videos/containers/categoriesList';
import { LinearGradient } from 'expo-linear-gradient';

import Api from './utils/api';

export default class App extends Component {

  constructor(props){
    super();
    this.state = {
      suggestionsList: [],
      categories: []
    }
  }
  async componentDidMount(){
    const movies = await Api.getSuggestion(20);
    const categorias = await Api.getmovies();
    console.log(categorias.movies)
    this.setState({
      suggestionsList: movies.movies,
      categories: categorias.movies
    })
  }
  render(){
    return (
      <View>
        <LinearGradient
          colors={[ '#1285EB', '#00F9EF']}
          >

        <Home>
          <Header>
              <Text>hola que ahces</Text>
          </Header>
          <Text style={styles.texto}>buscador</Text>
          <View style={styles.top}>
                <CategoriesList categories={this.state.categories}/>
          </View>
          
          <View style={styles.contensu}>
              <SuggestionsList
                list={this.state.suggestionsList}
              />
          </View>
        </Home>

          </LinearGradient>
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
    
  },
  contensu: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#fff',
    marginTop: 20
  },
  top:{
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
   
  }

});
