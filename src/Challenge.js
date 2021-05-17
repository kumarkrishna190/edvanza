import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import SectionHeader from './SectionHeader';
import challenge from './assets/challenge.png'
const { width, height } = Dimensions.get('window');

export default Challenge = () => {
    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'Employer Challenges'} subTitle={'Checkout all the personslised challenges for you'}/>
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Image source={challenge} style={styles.image} />
                    <Text style={styles.heading}>Challenge name</Text>
                    <Text style={styles.subHeading}>Start doing lorem ipsom dolar</Text>
                </View>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Image source={challenge} style={styles.image} />
                    <Text style={styles.heading}>Challenge name</Text>
                    <Text style={styles.subHeading}>In progress</Text>
                    <View style={{backgroundColor:'#2c354a',borderRadius:100,height:width/30,width:width/2.6}}>
                        <View style={{backgroundColor:'#e83363',borderRadius:100,height:width/30,width:width/3.6}} />
                    </View>
                </View>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#12192e',
        padding: 10,
        paddingBottom:40
    },
    heading:{
        color:'#fff',
        fontSize: width/14,
        fontWeight:'700'
    },
    image:{
        marginVertical:10,
        width:width/6,
        height:width/6
    },
    subHeading:{
        color:'#a0a6bd',
        fontSize:18,
        marginVertical:8,
    }
})