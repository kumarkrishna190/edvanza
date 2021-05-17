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
import defaultProfile from './assets/defuallt_profile.png';
const { width, height } = Dimensions.get('window');

export default Role = () => {

    const items = [
        {
            title: 'Data Scientist',
            isRecom: true,
            skillMatch: 75,
            postings: 120,
            locations: 10
        },
        {
            title: 'Data Analyst',
            isRecom: false,
            skillMatch: 65,
            postings: 120,
            locations: 10
        },
    ]


    const renderItem = ({item, index}) => {
        return (
            <View style={{borderRadius:10,elevation:10, width:width/1.4,height:item.isRecom ? width/1.4 : width/1.6,padding:10,backgroundColor:'#242d40',marginHorizontal:10}}>
                {item.isRecom ?
                    <View style={styles.continueBtn}>
                        <Text style={styles.continueTxt}>Top Recommendation</Text>
                    </View>
                :
                    null
                }
                <Text style={styles.heading}>{item.title}</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                    <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                    <ProgressCircle
                        percent={item.skillMatch}
                        radius={40}
                        borderWidth={8}
                        color="#e83363"
                        shadowColor="#979797"
                        bgColor="#242d40"
                    >
                        <Text style={{ fontSize: 20, color:'#fff' }}>{item.skillMatch + '%'}</Text>
                    </ProgressCircle>
                        <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>skill match</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>
                        <View style={{backgroundColor:'#12192e',width:width/6,height:width/6,justifyContent:'center',borderRadius:50,padding:4}}>
                            <Text style={{color:'#a0a6bd',fontSize:22,textAlign:'center'}}>{item.postings}</Text>
                        </View>
                        <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>postings</Text>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                        <View style={{backgroundColor:'#12192e',width:width/6,height:width/6,justifyContent:'center',borderRadius:50,padding:4}}>
                            <Text style={{color:'#a0a6bd',fontSize:26,textAlign:'center'}}>{item.locations}</Text>
                        </View>
                        <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>locations</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.subHeading}>Suggested by  </Text>
                    <View style={{flexDirection:'row',marginLeft:6}}>
                        <Image source={defaultProfile} style={styles.image} />
                        <Image source={defaultProfile} style={styles.image} />
                        <Image source={defaultProfile} style={styles.image} />
                        <Image source={defaultProfile} style={styles.image} />
                    </View>
                </View>
            </View>
        );
    }


    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'Recommended Role'} />
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
        color:'#a0a6bd',
        fontSize:18,
        marginVertical:8,
    },
    continueBtn:{
        backgroundColor:'#12192e',
        marginVertical:10,
        width:width/2,
        borderRadius:50,
    },
    continueTxt:{
        textAlign:'center',
        fontSize:18,
        color:'#a0a6bd',
        padding:4
    },
})