import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import defaultProfile from './assets/defuallt_profile.png'
const { width, height } = Dimensions.get('window');

export default Header = () => {
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>edvanza</Text>
            <View style={{flexDirection:'row'}}>
                <Image source={defaultProfile} style={styles.avtar}/>
                <Text style={styles.avtarCount}>10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#12192e',
        flexDirection:'row',
        padding: 10,
        justifyContent:'space-between',
        elevation: 5,
        borderBottomColor:'#3e3b4b',
        borderBottomWidth:5
    },
    title:{
        color:'#f00',
        fontSize: width/14,
        fontWeight:'bold'
    },
    avtar:{
        width:width/8,
        height:width/8,
        resizeMode:'contain',
        marginRight: -12,
        elevation: 5
    },
    avtarCount:{
        height:width/17,
        fontSize:width/36,
        padding:4,color:'#fff',
        backgroundColor:'#f00',
        marginTop:-8,
        borderRadius:50
    }
})