import React, { Component } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Image, StyleSheet, FlatList, Text } from 'react-native';
import utownLogo from './utown.jpeg';

export default class Sidebar extends Component {
  render() {
    return (
      <View style={styles.sidebarContainer}>

        <View style={{height: '13%'}}>
          <Image style={styles.logo} source={utownLogo} alt="logo" />
        </View>

        <View style={styles.liContainer}>

          <View style={styles.sidebarSections}>
            <Text style={styles.flatList}>
              <FontAwesome name='user' size={20}/>
              &nbsp; Your Profile
            </Text>
            <Text style={styles.flatList}>
              <FontAwesome name='bell' size={20}/>
              &nbsp; Notifications
            </Text>
            <Text style={styles.flatList}>
              <FontAwesome name='star' size={20}/>
              &nbsp; Favorites
            </Text>
          </View>

          <View style={styles.sidebarSections}>
            <Text style={styles.flatList}>
              <Text style={styles.header}>
                Special Maps Near You &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Entypo name='chevron-down' size={30}/>
              </Text>
            </Text>

            <View>
              <View style={{paddingTop: 10, paddingBottom: 10}}><Text><Ionicons name='ios-disc' size={20} color='#808080'/>&nbsp;</Text></View>
              <View style={{position: 'absolute', marginLeft: 25, marginTop: -20, paddingTop: 10, paddingBottom: 10}}>
                <Text style={styles.flatList}>Hop Jam Fest</Text>
                <Text style={{fontStyle: 'italic', color: '#808080', fontSize: 13, marginTop: -15}}>May 1-3</Text>
              </View>
            </View>

            <Text style={styles.flatList}>
              <Ionicons name='ios-disc' size={20}/>
              &nbsp; Visit Tulsa's Must see Attractions
            </Text>
          </View>

          <View style={styles.sidebarSections}>
            <Text style={styles.flatList}><FontAwesome name="comment-o" size={20}/> &nbsp; Send Us Feeback</Text>
          </View>

          <View style={styles.sidebarSections}>
            <Text style={styles.flatList}>Settings</Text>
            <Text style={styles.flatList}>Privacy Policy</Text>
            <Text style={styles.flatList}>Terms of Service</Text>
            <Text style={styles.flatList}><Text style={{color: '#0080FF'}}>Log Out</Text></Text>
          </View>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 150,
    marginLeft: 80
  },

  sidebarSections: {
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
    paddingLeft: 20,
    marginBottom: 0
  },

  flatList: {
    paddingTop: 15,
    paddingBottom: 15,
    color: '#808080',
    fontSize: 17
  },

  sidebarContainer: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: '#ffffff',
    flex: 1,
    bottom: 0,
    top: 0,
    width: '85%'
  },

  liContainer: {
    height: '87%',
    flex: 1,
    flexDirection: 'column'
  },

  header: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 0,
    color: '#808080'
  }
})

