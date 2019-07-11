import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';

import SuggestionsListLayout from '../components/SuggestionsListLayout';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Suggestions from '../components/Suggestions';

class SuggestionsList extends Component{
    renderEmtpy = () => <Empty text="no hay sugerencias"/>
    ItemSeparator = () => <Separator />

    keyextractor = item => item.id.toString();
    renderItem = ({item}) => {
        return(
            <Suggestions
                llave={item.id}
                title={item.title}
                synopsis={item.description_full}
                img={item.medium_cover_image}
                year={item.year}
            />
        )
    }

    render(){
        return(
            <SuggestionsListLayout title="Recomendados para ti">
                <FlatList
                    keyExtractor={this.keyextractor}
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