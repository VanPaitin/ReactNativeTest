import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableHighlight, Button } from "react-native";
import Calendar from "react-native-calendar-updated";
import Entypo from 'react-native-vector-icons/Entypo';

export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
    this.handlePrevButtonPress = this.handlePrevButtonPress.bind(this);
    this.handleNextButtonPress = this.handleNextButtonPress.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
  }

  handleNextButtonPress() {
    let date = new Date(this.state.date);
    date.setMonth(date.getMonth() + 1);
    this.setState({
      date
    });
  }

  handlePrevButtonPress() {
    let date = new Date(this.state.date);
    date.setMonth(date.getMonth() - 1);
    this.setState({
      date
    });
  }

  handleDateSelect(date) {
    // alert(`clicked: ${this.state.date.toString()}`);
  }

  render() {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date();
    let today = date.getDay();
    let twoDaysTime = (today + 2) % weekdays.length

    return (
      <View style={styles.calendar}>
        <View style={styles.header}>
          <Text style={styles.peek}>Peek into the future</Text>
          <TouchableHighlight onPress={this.props.calendarDisplay}>
            <Entypo name="calendar" size={25} style={styles.icon}/>
          </TouchableHighlight>
        </View>

        <View style={styles.dayGroup}>
          <TouchableHighlight onPress={this.props.calendarDisplay} style={[styles.button, {backgroundColor: '#808080'}]}>
            <Text style={{fontWeight: 'bold', color: '#FFF', letterSpacing: 1}}>Today</Text>
          </TouchableHighlight>
          <View style={styles.button}><Text style={styles.buttonText}>Tomorrow</Text></View>
          <View style={styles.button}><Text style={styles.buttonText}>{weekdays[twoDaysTime]}</Text></View>
        </View>

        <Calendar
          date={this.state.date}
          onPrevButtonPress={this.handlePrevButtonPress}
          onNextButtonPress={this.handleNextButtonPress}
          onDateSelect={this.handleDateSelect}
          style={styles.calendarProper}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#808080'
  },

  calendar: {
    zIndex: 1000,
    position: 'absolute',
    marginTop: 30,
    marginLeft: 10,
    paddingTop: 13,
    paddingRight: 9.5,
    backgroundColor: '#ffffff',
    paddingBottom: 2,
    borderRadius: 5,
    width: '94.5%',
    // height: 100
  },

  header: {
    paddingLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  peek: {
    color: '#808080',
    fontSize: 18,
    fontWeight: '400',
  },

  dayGroup: {
    // padding-top: 0.5em;
    // display: flex;
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  button: {
    borderWidth: 0.5,
    borderColor: '#808080',
    borderRadius: 25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 7,
    paddingRight: 8
  },

  buttonText: {
    color: '#808080',
    letterSpacing: 1
  },

  calendarProper: {
    borderBottomWidth: 0
  }
})

