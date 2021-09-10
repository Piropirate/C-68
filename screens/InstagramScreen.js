import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class InstagramScreen extends React.Component{
    render(){
        return(
          <View style={styles.view}>
              <Text style={styles.text}>Instagram</Text>
          </View>  
        );
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'lightyellow',
        fontSize:40,
        width:200,
        height:60,
        backgroundColor:'lightpink',
        
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})