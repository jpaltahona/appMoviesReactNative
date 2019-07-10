import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

import SuggestionsListLayout from '../components/SuggestionsListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestions from '../components/Suggestions';

class SuggestionsList extends Component{
    renderEmtpy = () => <Empty text="no hay sugerencias"/>
    ItemSeparator = () => <Separator />
    renderItem = ({item}) => {
        return(
                <Suggestions {...item}
                llave={item.key}
                title={item.title}
            />
        )
    }

    render(){
        const list = [
            {
                key: '1',
                title: 'Avengers',
                img: 'https://u01.appmifile.com/images/2019/04/21/bb19a0d7-155c-4136-8560-a93933d4440a.png'

            },
            {
               key: '2',
               title: 'Capitana marvel',
               img: 'https://u01.appmifile.com/images/2019/04/21/bb19a0d7-155c-4136-8560-a93933d4440a.png'
            }
            
        ]
        return(
            <SuggestionsListLayout title="Recomendados para ti">
                <FlatList 
                    data={list}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionsListLayout>
            
        );
    }
}

export default SuggestionsList;