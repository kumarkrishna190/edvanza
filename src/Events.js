import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  ImageBackground
} from 'react-native';
import SectionHeader from './SectionHeader';
import Carousel from 'react-native-snap-carousel';
import ProgressCircle from 'react-native-progress-circle';
import icn_online_label from './assets/icn_online_label.png'
import defaultProfile from './assets/defuallt_profile.png';
const { width, height } = Dimensions.get('window');

export default Events = () => {

    const items = [
        {
            title: 'Deep Learning 2.0 Virtual Summit',
            date: '28/05/2021',
            joining: '120'
        },
        {
            title: 'Conferance Virtual Data Learning',
            date: '31/05/2021',
            joining: '98'
        },
    ]

    const renderItem = ({item, index}) => {
        return (
            <View style={{borderRadius:50, backgroundColor:'#00080d',borderRadius:10,margin:10,padding:5, width:width/1.2}}>
                
                    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
                        <View style={{backgroundColor:'#333d43',width:width/3.6,borderRadius:50,flexDirection:'row',padding:5}}>
                            <Image source={defaultProfile} style={{alignSelf:'center',width:width/28,height:width/28,marginHorizontal:5}} />
                            <Text style={{color:'#fff',fontSize:14}}>{item.joining} Joining</Text>
                        </View>
                        <View style={{backgroundColor:'#333d43',width:width/3,borderRadius:50,flexDirection:'row',padding:5}}>
                            <Image source={icn_online_label} style={{alignSelf:'center',width:width/28,height:width/28,marginHorizontal:5}} />
                            <Text style={{color:'#fff',fontSize:14}}>Online Event</Text>
                        </View>
                    </View>
                    <View style={{marginTop:width/5,padding:5,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                        <Text style={styles.heading}>{item.title}</Text>
                        <Text style={styles.subHeading}>{item.date}</Text>
                    </View>
            </View>
        );
    }


    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'Upcoming Events'} />
            <FlatList horizontal data={items || []} showsHorizontalScrollIndicator={false} renderItem={renderItem}/>                
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
        fontWeight:'500'
    },
    image:{
        marginVertical:10,
        width:width/18,
        height:width/18,
        borderRadius:50,
        marginLeft:-5
    },
    subHeading:{
        color:'#fff',
        fontSize:22,
        marginVertical:8,
    }
})