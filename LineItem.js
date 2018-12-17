import React from 'react';
import { Text, View } from 'react-native';
import styles from './LineItem.styles.js';

export default class LineItem extends React.Component {
  render() {
    return (
      <View style={styles.listItem}>

        <View style={styles.listItemLeftContainer}>
          <View style={styles.listItemIcon}></View>
        </View>
        
        <View style={styles.listItemRightContainer}>
          <View style={styles.listItemMainDetails}>
            <Text style={styles.listItemCategoryText}>Food</Text>
            <Text style={styles.listItemCostText}>$4.56</Text>
          </View>

          <View style={styles.listItemSecondaryDetails}>
            <View style={{marginRight: 5}}><Text style={styles.listItemStoreText}>7/11,</Text></View>
            <View><Text style={styles.listItemTimeText}>3:27pm</Text></View>
          </View>          
        </View>

      </View>
    );
  }
}