import React from 'react';
import { Text, View } from 'react-native';
import styles from './LineItem.styles.js';

export default class LineItem extends React.Component {
  render() {
    let time = new Date(this.props.time);
    time = `${time.getHours()}:${time.getMinutes()}`

    return (
      <View style={styles.listItem}>

        <View style={styles.listItemLeftContainer}>
          <View style={styles.listItemIcon}></View>
        </View>
        
        <View style={styles.listItemRightContainer}>
          <View style={styles.listItemMainDetails}>
            <Text style={styles.listItemCategoryText}>{this.props.category}</Text>
            <Text style={styles.listItemCostText}>${this.props.cost}</Text>
          </View>

          <View style={styles.listItemSecondaryDetails}>
            <View><Text style={styles.listItemStoreText}>{this.props.store},</Text></View>
            <View><Text style={styles.listItemTimeText}> {time}</Text></View>
          </View>          
        </View>

      </View>
    );
  }
}