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
import play_btn from './assets/play_btn.png';
import icn_online_label from './assets/icn_online_label.png'
import defaultProfile from './assets/defuallt_profile.png';
const { width, height } = Dimensions.get('window');

export default Course = () => {

    const items = [
        {
            title: 'Python for beginners',
        },
        {
            title: 'SQl for beginners',
        },
    ]

    const renderItem = ({item, index}) => {
        return (
            <View style={{borderRadius:50, width:width/1.2,height:width/1.2}}>
                <ImageBackground
                    source={icn_online_label}
                    style={{borderRadius:20,elevation:10, width:width/1.4,height:width/1.6,marginHorizontal:10}}>
                    <Image source={play_btn} style={{alignSelf:'center',width:width/5,height:width/5,marginTop:width/16}} />
                    <View style={{backgroundColor:'#ca325e', marginTop:width/5,padding:5,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                        <Text style={styles.heading}>{item.title}</Text>
                        <Text style={styles.subHeading}>20 Videos . 12 Hrs</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{backgroundColor:'#5a2a43',width:width/4,borderRadius:50,flexDirection:'row',padding:5}}>
                                <Image source={icn_online_label} style={{alignSelf:'center',width:width/28,height:width/28,marginHorizontal:5}} />
                                <Text style={{color:'#fff',fontSize:14}}>Certified</Text>
                            </View>
                            <View style={{backgroundColor:'#5a2a43',width:width/2.3,borderRadius:50,flexDirection:'row',padding:5}}>
                                <Image source={icn_online_label} style={{alignSelf:'center',width:width/28,height:width/28,marginHorizontal:5}} />
                                <Text style={{color:'#fff',fontSize:14}}>Highly Recommended</Text>
                            </View>
                        </View>
                    </View>  
                </ImageBackground>
            </View>
        );
    }


    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'Courses for you'} />
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