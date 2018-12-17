import React from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles.js';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.mainText}>Today</Text>
        <Text style={styles.secondaryText}>$26.32</Text>  
      </View>             
    );
  }
}