import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default SectionHeader = ({title, subTitle=''}) => {
    return(
        <View style={styles.headerContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.viewContainer}>
                    <Text style={styles.viewAll}>View all</Text>
                </View>
            </View>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#12192e',
        padding: 10,
    },
    title:{
        color:'#fff',
        fontSize: width/16,
        fontWeight:'bold'
    },
    viewContainer:{
        backgroundColor:'#FFF',
        width:width/4,
        borderRadius:50,
        justifyContent:'center',
        elevation:5
    },
    viewAll:{
        color:'#f00',
        fontSize:18,
        textAlign:'center'
    },
    subTitle:{
        color:'#a0a6bd',
        fontSize:14,
        marginTop:5
    }
})