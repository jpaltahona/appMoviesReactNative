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
                llave={item.id}
                title={item.title}
                synopsis={item.description_full}
                img={item.background_image}
                year={item.year}
            />
        )
    }

    render(){
        return(
            <SuggestionsListLayout title="Recomendados para ti">
                <FlatList 
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionsListLayout>
            
        );
    }
}

export default SuggestionsList;