// import React from 'react'
import { View , Image , TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
const SearchBar = () => {
  return (
    <View style={searchBarStyle.mainDiv} >
        <Image style={{transform : [{scale : 1.5}]}} source={require("../../assets/images/SearchIcon.png")} />
        <TextInput style={searchBarStyle.input} placeholder='Search any Product...' placeholderTextColor="#BBBBBB" />
        <Image style={{transform : [{scale : 1.5}]}} source={require("../../assets/images/micIcon.png")} />
    </View>
  )
}

const searchBarStyle = StyleSheet.create({
    mainDiv: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor : "white",
        padding: 10,  // Added padding for spacing
        borderRadius: 10 , 
        marginTop : 20
    },
    input : {
        width : "80%" , 
        fontSize : 20 ,
        fontFamily : ""
    }
})


export default SearchBar