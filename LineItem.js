import React from 'react';
import { Text, View } from 'react-native';
import styles from './App.styles.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        <View style={styles.listItem}>
          <View style={styles.listIcon}></View>
          <View>
            <Text style={styles.listTextMain}>Food</Text>
            <View style={styles.listLineSecondary}>
              <View style={{marginRight: 5}}><Text style={styles.listTextSecondary}>7/11</Text></View>
              <View><Text style={styles.listTextSecondary}>3:27pm</Text></View>
            </View>
          </View>
          <View>
            <Text style={styles.listTextBig}>$4.56</Text>
          </View>
        </View>
      </View>                  
    );
  }
}