import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
//import { SvgUri } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { View, Image, Text } from "react-native";
import SvgUri from 'react-native-svg-uri';

const CustomerCard = () => {
  return (
     <View style={{ marginBottom: 10, marginLeft: 5, marginRight: 5, borderRadius: 2}} >
                      <Card style={{ borderRadius: 8 }}>
                        <CardItem header style={{ flexDirection: 'row', backgroundColor: '#fff', width: '100%', justifyContent: 'space-between', borderBottomColor: '#f1f1f1', borderBottomWidth: 1,borderRadius: 80 }}>
                          <View style={{paddingTop:10 }}>
                              <Text style={{fontWeight: "bold", fontSize: 24, fontFamily: 'sans-serif', color:'grey',padding: 2}}>Wallet Balance</Text>
                          </View>

                            <View style = {{ width : wp('10%'),height: wp('10%'),backgroundColor : '#E091C9' ,borderRadius : hp('1%'), margin : 8,flexDirection :'row',justifyContent :'center',alignItems : 'center'}}>
                           {/* <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  /> */}
  <SvgUri 
            width={30}
    height={30}
            source={require('../assets/wallet-svgrepo-com.svg')} 
          />
                             </View>

                            <View style={{
                            flexDirection: 'column',
                            height: 25, paddingRight: 10, paddingLeft: 10, paddingTop: 5,paddingBottom:30}}>
                            <Text style={{fontWeight: "bold", fontSize: 20, fontFamily: 'sans-serif', color:'green',padding: 2}}>$ 100.00</Text>
                            <Text style={{fontWeight: "bold", fontSize: 16, fontFamily: 'sans-serif', color:'green',padding: 2}}>Credited</Text>
                            </View>

                        </CardItem>
                        <View style = {{flexDirection : 'row',paddingLeft:50,paddingRight:50,justifyContent :'center',alignItems : 'center'}}>
                                <View>
                                  <View style = {{width : wp('14%'),height: wp('14%'),backgroundColor : 'rgb(163, 153, 233)',borderRadius : hp('2%'), margin : 10,flexDirection :'row',justifyContent :'center',alignItems : 'center'}}>
                                {/* <SvgUri
    width="100%"
    height="100%"
    uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
  /> */}
  <SvgUri 
            width={30}
    height={30}
            source={require('../assets/qr-codes-svgrepo-com.svg')} 
          />
                                  </View>
                                  <View style={{paddingBottom:15,justifyContent :'center',alignItems : 'center'}}>
                                    <Text style={{fontWeight: "bold", fontSize: 16, fontFamily: 'sans-serif', color:'grey'}}>Scan QR Code</Text>
                                  </View>
                                </View>
                      </View>
                      </Card>
                    </View>
  );
};


export default CustomerCard;
