import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styles from './LineItem.styles.js';

export default class LineItemSection extends React.Component {
  constructor(props) {
    super(props);
    this.getSum = this.getSum.bind(this);
  }
  getSum(items) {
    return `$${items.length == 0 ? 0 : items.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2)}`;
  }
  render() {
    
    return (
      <View>
        <Text>
          {this.props.header}
        </Text>
        <Text>
          {this.getSum(this.props.items)}
        </Text>
        {/* <FlatList
          data={this.props.items}
          renderItem={({item}) => <Text>{item.cost}</Text>}
        /> */}
      </View>
    );
  }
}