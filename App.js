import React from 'react';
import { ScrollView, Text, View } from 'react-native';

import Header from './Header.js';
import dummyData from './dummyData.js';
import LineItem from './LineItem.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dayLineItems: {
        header: 'Today',
        data: [],
      },
      weekLineItems: {
        header: 'This Week',
        data: [],
      },
      monthLineItems: {
        header: 'This Month',
        data: [],
      },
    }

    this.getStartOfDay = this.getStartOfDay.bind(this);
    this.getStartOfWeek = this.getStartOfWeek.bind(this);
    this.getStartOfMonth = this.getStartOfMonth.bind(this);
  }
  getStartOfDay() {
    let currTime = new Date();
    currTime.setHours(0);
    currTime.setMinutes(0);
    currTime.setSeconds(0);
    currTime.setMilliseconds(0);
    return currTime.getTime();
  }
  getStartOfWeek() {
    let currTime = new Date(this.getStartOfDay());
    currTime.setDate(currTime.getDate() - 7);
    return currTime.getTime();
  }
  getStartOfMonth() {
    let currTime = new Date(this.getStartOfDay());
    currTime.setMonth(currTime.getMonth() - 1);
    return currTime.getTime();
  }
  componentWillMount() {
    const data = Object.values(dummyData).map(x => JSON.parse(x)).sort((a,b) => a.timestamp <= b.timestamp);
    const newState = {...this.state};
    newState.dayLineItems.data = data.filter(x => x.timestamp >= this.getStartOfDay());
    newState.weekLineItems.data = data.filter(x => x.timestamp >= this.getStartOfWeek());
    newState.monthLineItems.data = data.filter(x => x.timestamp >= this.getStartOfMonth());

    // console.log(newState);
    this.setState({newState});
    console.log(this.state);
  }
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator='False'>
        <View style={styles.container}>
          <Header/>
          <LineItem/>
        </View>
      </ScrollView>
    );
  }
}
