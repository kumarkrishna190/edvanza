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
const { width, height } = Dimensions.get('window');

export default Assessment = () => {
    return(
        <View style={styles.headerContainer}>
            <SectionHeader title={'Your Assessments'} subTitle={'Assess your skills and upgrade your self with edvanza'}/>
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Text style={styles.heading}>Javascript</Text>
                    <Text style={{fontSize:22,color:'#a0a6bd'}}>Your current level</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#242d40',width:width/12,height:width/12,borderRadius:50,padding:2,borderWidth:2}}>
                                <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>L</Text>
                            </View>
                            <Text style={{color:'#5e657a',fontSize:18,textAlign:'center'}}>Low</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#5ca4a9',width:width/10,height:width/10,justifyContent:'center',borderRadius:50,padding:4}}>
                                <Text style={{color:'#fff',fontSize:22,textAlign:'center'}}>M</Text>
                            </View>
                            <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>Medium</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#242d40',width:width/8,height:width/8,justifyContent:'center',borderRadius:50,padding:4,borderWidth:2}}>
                                <Text style={{color:'#a0a6bd',fontSize:26,textAlign:'center'}}>H</Text>
                            </View>
                            <Text style={{color:'#5e657a',fontSize:18,textAlign:'center'}}>High</Text>
                        </View>
                    </View>
                </View>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#242d40'}}>
                    <Text style={styles.heading}>HTML</Text>
                    <Text style={{fontSize:22,color:'#a0a6bd'}}>Your current level</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#242d40',width:width/12,height:width/12,borderRadius:50,padding:2,borderWidth:2}}>
                                <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>L</Text>
                            </View>
                            <Text style={{color:'#5e657a',fontSize:18,textAlign:'center'}}>Low</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#242d40',width:width/10,height:width/10,justifyContent:'center',borderRadius:50,padding:2,borderWidth:2}}>
                                <Text style={{color:'#a0a6bd',fontSize:22,textAlign:'center'}}>M</Text>
                            </View>
                            <Text style={{color:'#5e657a',fontSize:18,textAlign:'center'}}>Medium</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#e83363',width:width/8,height:width/8,justifyContent:'center',borderRadius:50,padding:4}}>
                                <Text style={{color:'#fff',fontSize:26,textAlign:'center'}}>H</Text>
                            </View>
                            <Text style={{color:'#a0a6bd',fontSize:18,textAlign:'center'}}>High</Text>
                        </View>
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
})