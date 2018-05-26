import React, { Component } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { View, TextInput, StyleSheet, TouchableHighlight } from 'react-native';

export default class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.searchBarContainer}>
        <TouchableHighlight onPress={this.props.showSidebar}>
          <EvilIcons name="navicon" size={30} style={styles.icon}/>
        </TouchableHighlight>

        <TextInput style={styles.searchBar} placeholder="Search local"/>

        <TouchableHighlight onPress={this.props.showingCalendar}>
          <Entypo name="calendar" size={25} style={styles.icon}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 5,
    marginTop: 30,
    height: 50,
    paddingTop: 8,
    paddingBottom: 8,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },

  searchBar: {
    flex: 1,
    marginLeft: 5
  },

  icon: {
    marginTop: 5,
    color: '#808080'
  }
})

