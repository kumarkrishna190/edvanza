/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import ProgressCircle from 'react-native-progress-circle';

import Header from './src/Header';
import Goals from './src/Goals';
import Role from './src/Role';
import Course from './src/Course'
import SectionHeader from './src/SectionHeader';
import Assessment from './src/Assessment';
import Challenge from './src/Challenge'
import Mentor from './src/Mentor';
import Events from './src/Events';
const { width, height } = Dimensions.get('window');
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle,{height:height/1.14}]}>
        <Header />
        <Goals />
        <Role />
        <Course />
        <Assessment />
        <Challenge />
        <Mentor />
        <Events />
      </ScrollView>
      <View style={styles.bottomNav}>
        <View style={styles.navView}>
          <Text style={styles.navText}>Connect</Text>
        </View>
        <View style={styles.navView}>
          <Text style={styles.navText}>Learn</Text>
        </View>
        <View style={styles.navView}>
          <Text style={[styles.navText,{color:'#e83363',fontSize:18}]}>My Home</Text>
        </View>
        <View style={styles.navView}>
          <Text style={styles.navText}>Work</Text>
        </View>
        <View style={styles.navView}>
          <Text style={styles.navText}>More</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomNav:{
    backgroundColor:'#242d40',
    height:height*0.12,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  navView:{
    padding:10
  },
  navText:{
    color:'#a0a6bd',
    fontSize:16,
    fontWeight:'600',
  }
});

export default App;
