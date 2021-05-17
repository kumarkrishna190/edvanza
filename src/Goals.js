import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import completed from './assets/completed.png';
import inProgress from './assets/inProgress.png';
import pending from './assets/pending.png';
const { width, height } = Dimensions.get('window');

export default Goals = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Goals</Text>
            <View style={{flexDirection:'row'}}>
                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Current Role</Text>
                    <Text style={styles.subHeading}>Web developer</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text style={[styles.heading,{marginTop:10,marginLeft:10}]}>10 weeks</Text>

                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.heading}>Our suggestion</Text>
                    <Text style={styles.subHeading}>Data Scientist</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:30}}>
                <View>
                    <ProgressCircle
                        percent={50}
                        radius={90}
                        borderWidth={35}
                        color="#1c2432"
                        shadowColor="#5ca4a9"
                        bgColor="#12192e"
                    >
                        <Text style={{ fontSize: 30, color:'#fff' }}>{'50%'}</Text>
                    </ProgressCircle>
                </View>
                <View>
                    <Text style={styles.trackText}>You are on track</Text>
                    <View style={styles.trackContainer}>
                        <Image source={completed} style={styles.trackImage}/>
                        <View>
                            <Text style={styles.trackText}>04</Text>
                            <Text style={styles.trackText}>Courses Completed</Text>
                        </View>
                    </View>
                    <View style={styles.trackContainer}>
                        <Image source={inProgress} style={styles.trackImage}/>
                        <View>
                            <Text style={styles.trackText}>02</Text>
                            <Text style={styles.trackText}>In progress</Text>
                        </View>
                    </View>
                    <View style={styles.trackContainer}>
                        <Image source={pending} style={styles.trackImage}/>
                        <View>
                            <Text style={styles.trackText}>02</Text>
                            <Text style={styles.trackText}>Pending</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.continueBtn}>
                <Text style={styles.continueTxt}>CONTINUE LEARNING</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#1f2636'}}>
                    <Text style={styles.heading}>Your Skills and Levels</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#c2ba92',width:width/12,height:width/12,borderRadius:50,padding:4}}>
                                <Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>04</Text>
                            </View>
                            <Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>Low</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'center',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#5ca4a9',width:width/10,height:width/10,justifyContent:'center',borderRadius:50,padding:4}}>
                                <Text style={{color:'#fff',fontSize:22,textAlign:'center'}}>03</Text>
                            </View>
                            <Text style={{color:'#5ca4a9',fontSize:18,textAlign:'center'}}>Medium</Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'flex-end'}}>
                            <View style={{backgroundColor:'#e83363',width:width/8,height:width/8,justifyContent:'center',borderRadius:50,padding:4}}>
                                <Text style={{color:'#fff',fontSize:26,textAlign:'center'}}>05</Text>
                            </View>
                            <Text style={{color:'#e83363',fontSize:18,textAlign:'center'}}>High</Text>
                        </View>
                    </View>
                </View>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#1f2636'}}>
                    <Text style={styles.heading}>Jobs</Text>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Text style={{color:'#fff',fontSize:46,fontWeight:'600'}}>12 </Text>
                        <Text style={{color:'#fff',fontSize:20,marginTop:24}}> Matching</Text>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#1f2636'}}>
                    <Text style={styles.heading}>Challenges</Text>
                    <View style={{flexDirection:'row',marginTop:8}}>
                        <Text style={{color:'#fff',fontSize:28,fontWeight:'600'}}>07 </Text>
                        <Text style={{color:'#fff',fontSize:18,marginTop:10}}> In progress</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#fff',fontSize:28,fontWeight:'600'}}>02 </Text>
                        <Text style={{color:'#fff',fontSize:18,marginTop:10}}> Completed</Text>
                    </View>
                </View>
                <View style={{borderRadius:10,elevation:10, width:width/2.2,padding:10,backgroundColor:'#1f2636'}}>
                    <Text style={styles.heading}>Your Acheivements</Text>
                    <View style={{flexDirection:'row',marginTop:8}}>
                        <Text style={{color:'#fff',fontSize:28,fontWeight:'600'}}>05 </Text>
                        <Text style={{color:'#fff',fontSize:18,marginTop:10}}> Badges</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#fff',fontSize:28,fontWeight:'600'}}>02 </Text>
                        <Text style={{color:'#fff',fontSize:18,marginTop:10}}> Certifications</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#12192e',
        padding: 10,
        paddingBottom:40
    },
    title:{
        color:'#fff',
        fontSize: width/14,
        fontWeight:'400',
        marginBottom:14
    },
    subContainer:{
        width:width/3
    },
    heading:{
        fontSize:width/24,
        color:'#a0a6bd',
    },
    subHeading:{
        fontSize:width/24,
        marginTop:5,
        color:'#fff'
    },
    trackText:{
        fontSize:16,
        color:'#fff'
    },
    trackContainer:{
        flexDirection:'row',
        alignItems:'center',marginTop:10
    },
    trackImage:{
        width:width/12,
        height:width/12,
        marginHorizontal:10
    },
    continueBtn:{
        backgroundColor:'#e83363',
        marginVertical:20,
        width:width/1.4,
        borderRadius:50,
        alignSelf:'center'
    },
    continueTxt:{
        textAlign:'center',
        fontSize:22,
        color:'#fff',
        padding:10
    },
})