import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

import SuggestionsListLayout from '../components/SuggestionsListLayout';

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
            <SuggestionsListLayout title="Recomendados para ti">
                <FlatList 
                    data={list}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </SuggestionsListLayout>
            
        );
    }
}

export default SuggestionsList;