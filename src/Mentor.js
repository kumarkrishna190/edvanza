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
import defaultProfile from './assets/defuallt_profile.png';
import icn_tick_label from './assets/icn_tick_label.png';
const { width, height } = Dimensions.get('window');

export default Mentor = () => {
    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'My Mentors'} />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Image source={defaultProfile} style={styles.image} />
                    <Text style={styles.heading}>Isabel Rogers</Text>
                    <Text style={styles.subHeading}>Senior Data  Scientist</Text>
                    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#e83363',borderRadius:100,width:width/2.5}}>
                        <Image source={icn_tick_label} style={{width:20,height:20,marginLeft:10}}/>
                        <Text style={{color:'#fff',textAlign:'center',fontSize:22,padding:5}}>Connected</Text>
                    </View>
                </View>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Image source={defaultProfile} style={styles.image} />
                    <Text style={styles.heading}>Alejandro Hampton</Text>
                    <Text style={styles.subHeading}>Senior Data Manager</Text>
                    <View style={{borderColor:'#e83363',borderWidth:2,borderRadius:100,width:width/3}}>
                        <Text style={{color:'#fff',textAlign:'center',fontSize:22,padding:3}}>Connect</Text>
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
        fontSize: width/22,
        fontWeight:'500'
    },
    image:{
        marginVertical:10,
        width:width/6,
        height:width/6,
        borderRadius:50
    },
    subHeading:{
        color:'#a0a6bd',
        fontSize:17,
        marginVertical:8,
    }
})