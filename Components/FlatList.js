import React, { Component } from 'react';
import { Text, FlatList, View,} from 'react-native';

class FlatListComponent extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        )
    }
}
export default FlatListComponent