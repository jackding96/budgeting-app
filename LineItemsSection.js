import React from 'react';
import { Text, FlatList, View } from 'react-native';
import styles from './LineItemsSection.styles.js';

import Header from './Header.js';
import LineItem from './LineItem.js';

export default class LineItemsSection extends React.Component {
  constructor(props) {
    super(props);
    this.getSum = this.getSum.bind(this);
  }
  getSum() {
    return this.props.data.items.length == 0 ? 0 : this.props.data.items.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2);
  }
  render() {
    return (
      <View>
        <Header
          title={this.props.data.header}
          total={this.getSum(this.props.data.items)}
        />
        <FlatList
          data={this.props.data.items}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => 
            <LineItem
              category={item.category}
              store={item.store}
              cost={item.cost}
              time={item.timestamp}
            />
          }
        />
      </View>           
    );
  }
}