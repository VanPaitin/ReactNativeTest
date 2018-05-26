import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import CalendarComponent from './Calendar';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import map from './map-google.jpg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showingSidebar: false, showingCalendar: false };
    this.handleCalendar = this.handleCalendar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
  }

  handleCalendar() {
    this.setState(prevState => {
      return {showingCalendar: !prevState.showingCalendar}
    })
  }

  showSidebar(e) {
    e.stopPropagation();
    this.setState({showingSidebar: true, showingCalendar: false})
  }

  hideSidebar() {
    this.setState({showingSidebar: false});
  }

  render() {
    let opacity = this.state.showingSidebar ? 'opacity' : ''

    return (
      <ImageBackground source={map} style={{width: '100%', height: '100%'}}>
        {this.state.showingSidebar && <Sidebar />}

        <View style={styles.container}>
          {this.state.showingCalendar && <CalendarComponent calendarDisplay={this.handleCalendar}/>}
          <SearchBar showingCalendar={this.handleCalendar} showSidebar={this.showSidebar} />
        </View>

        <TouchableHighlight onPress={this.hideSidebar} style={styles[opacity]}><View></View></TouchableHighlight>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  opacity: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  }
})

export default App;
