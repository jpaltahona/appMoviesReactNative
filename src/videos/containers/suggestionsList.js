import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

class SuggestionsList extends Component{
    render(){
        const list = [
            {
                key: '1',
                title: 'jean'
            },
            {
               key: '2',
               title: 'pierre'
            }
            
        ]
        return(
            <FlatList 
                data={list}
                renderItem={({item}) => <Text>{item.title}</Text>}
            />
        );
    }
}

export default SuggestionsList;