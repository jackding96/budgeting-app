import React from 'react';
import { Text, View } from 'react-native';
import styles from './LineItem.styles.js';

export default class LineItem extends React.Component {
  constructor(props) {
    super(props);

    this.formatAMPM = this.formatAMPM.bind(this);
  }

  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  render() {
    let time = new Date(this.props.time);
    time = this.formatAMPM(time);

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