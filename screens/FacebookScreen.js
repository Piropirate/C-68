import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>Facebook</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'white',
        fontSize:40,
        width:200,
        backgroundColor:'navy',
        
    },
    view:{
        flex:1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    }
})