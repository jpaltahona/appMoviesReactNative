import React , {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import Empty from '../components/Empty';
import Separator from '../components/Separator';
import Categories from '../components/categories';



class CategoriesList extends Component{
    renderEmtpy = () => <Empty text="no hay sugerencias"/>
    ItemSeparator = () => <Separator />
    keyextractor = item => item.id.toString();
    renderItem = ({item}) => {
        return(
            <Categories
                title={item.title}
                synopsis={item.description_full}
                img={item.medium_cover_image}
                rating={item.rating}
                gender={item.genres[0]}
            />
        )
    }
    render(){
        return(
            <View>
                <Text>Categorias</Text>
                <FlatList 
                    keyExtractor={this.keyextractor}
                    horizontal
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