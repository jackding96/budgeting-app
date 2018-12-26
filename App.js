import React from 'react';
import { ScrollView, SectionList, Button, FlatList, Text, View } from 'react-native';

import Header from './Header.js';
import dummyData from './dummyData.js';
import LineItem from './LineItem.js';
import styles from './App.styles.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // Binding functions
    this.getDay = this.getDay.bind(this);
    this.setDay = this.setDay.bind(this);
    this.setMonth = this.setMonth.bind(this);
    this.getSum = this.getSum.bind(this);
    
    // Timestamp variables
    this.CURR_TIME = new Date();

    this.state = {
      limit: {
        amount: 100,
        time_scope: 'week'
      },
      line_items: [
        {
          header: 'Today',
          lower_time_bound: this.setDay(this.CURR_TIME, 0),
          upper_time_bound: this.CURR_TIME,
          items: [],
        },
        {
          header: 'This Week',
          lower_time_bound: this.setDay(this.CURR_TIME, -7),
          upper_time_bound: this.setDay(this.CURR_TIME, 0) - 1,          
          items: [],
        },
        {
          header: '2 Weeks',
          lower_time_bound: this.setDay(this.CURR_TIME, -14),
          upper_time_bound: this.setDay(this.CURR_TIME, -7) - 1,          
          items: [],
        },
        {
          header: '3 Weeks',
          lower_time_bound: this.setDay(this.CURR_TIME, -21),
          upper_time_bound: this.setDay(this.CURR_TIME, -14) - 1,          
          items: [],
        }, 
        {
          header: 'Month',
          lower_time_bound: this.setMonth(this.CURR_TIME, -1),
          upper_time_bound: this.setDay(this.CURR_TIME, -21) -1,          
          items: [],
        }, 
        {
          header: '2 Months',
          lower_time_bound: this.setMonth(this.CURR_TIME, -2),
          upper_time_bound: this.setMonth(this.CURR_TIME, -1) - 1,          
          items: [],
        },
        {
          header: '3 Months',
          lower_time_bound: this.setMonth(this.CURR_TIME, -3),
          upper_time_bound: this.setMonth(this.CURR_TIME, -2) - 1,          
          items: [],
        },                                            
      ]
    }


  }
  getDay(currTime) {
    let newTime = new Date(currTime);
    newTime.setHours(0);
    newTime.setMinutes(0);
    newTime.setSeconds(0);
    newTime.setMilliseconds(0);
    return currTime.getTime();
  }
  setDay(currTime, increment) {
    let newTime = new Date(this.getDay(currTime));
    newTime.setDate(newTime.getDate() + increment);
    return newTime.getTime();
  }
  setMonth(currTime, increment) {
    let newTime = new Date(this.getDay(currTime));
    newTime.setMonth(newTime.getMonth() + increment);
    return newTime.getTime();
  }

  getSum(items) {
    return `$${items.length == 0 ? 0 : items.map(x=>parseFloat(x.cost)).reduce((a,c) => { return a+c}).toFixed(2)}`;
  }  
  componentWillMount() {
    const data = Object.values(dummyData).map(x => JSON.parse(x)).sort((a,b) => a.timestamp <= b.timestamp);
    const newState = {...this.state};

     // Sort raw data into the state object
    newState.line_items.forEach((line_item) => {
      line_item.items = data.filter(x => x.timestamp >= line_item.lower_time_bound && x.timestamp <= line_item.upper_time_bound);
    });
    this.setState({newState});
  }
  
  render() {
    return (
      <View>

        {/* Today, This Week, 2 Weeks, 3 Weeks, Month, 2 Months, 3 Months */}

        {/* <SectionList
          style = {styles.listContainer}
          stickySectionHeadersEnabled = 'True'
          renderItem={({item, index, section}) => (
            <LineItem
              category={item.category}
              store={item.store}
              cost={item.cost}
              time={item.timestamp}
            />
          )}
          renderSectionHeader={({section: {title, total}}) => (
            <Header
              title={title}
              total={total}
            />
          )}
          sections={[
            {title: this.state.dayLineItems.header, total:this.state.dayLineItems.total, data: this.state.dayLineItems.items},
            {title: this.state.weekLineItems.header, total:this.state.weekLineItems.total, data: this.state.weekLineItems.items},
            {title: this.state.monthLineItems.header, total:this.state.monthLineItems.total, data: this.state.monthLineItems.items},
          ]}
          keyExtractor={(item, index) => item + index}
        /> */}

      </View>
    );
  }
}
