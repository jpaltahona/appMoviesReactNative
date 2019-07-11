import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/Separator';


class CategoriesList extends Component{
    renderEmtpy = () => <Empty text="no hay sugerencias"/>
    renderItem = () => {
        return(
            <Text>Hello</Text>
        )
    }
    render(){
        return(
            <View>
                <FlatList 
                    data={this.props.categories}
                    ListEmptyComponent={this.renderEmtpy}
                    ItemSeparatorComponent={this.ItemSeparator}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}
export default CategoriesList;