import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import LineItem from './LineItem.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator='False'>
        <View style={styles.container}>

          <View style={styles.header}>
            <Text style={styles.mainText}>Today</Text>
            <Text style={styles.secondaryText}>$26.32</Text>  
          </View>

          <LineItem/>
          
        </View>
      </ScrollView>
    );
  }
}
