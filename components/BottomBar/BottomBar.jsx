import { View, Text, Image } from 'react-native'
import { Alert } from 'react-native'
import { TouchableNativeFeedback } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'
import { router } from 'expo-router'
const BottomBar = () => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100%",
      marginHorizontal: "auto",
      paddingHorizontal: 20,
      backgroundColor: "white",
      height: 70,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    }} >
      <TouchableNativeFeedback onPress={() => {
        router.push("/(home)/")
      }} >
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}   >
          <Image source={require("../../assets/images/home.png")} />
          <Text>Home</Text>
        </View>
      </TouchableNativeFeedback>


      <TouchableNativeFeedback onPress={() => {
        router.push("/(wishlist)/")
      }} >
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }} >
          <Image source={require("../../assets/images/heart.png")} />
          <Text>Wishlist</Text>
        </View>
      </TouchableNativeFeedback>


      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, position: "relative", top: -20, backgroundColor: "white", width: 50, height: 50, borderRadius: 50 }} >
        <Image source={require("../../assets/images/shopping-cart.png")} />
      </View>
      <TouchableNativeFeedback onPress={() => {
        router.push("/(search)/")
      }} >
        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }} >
          <Image source={require("../../assets/images/search.png")} />
          <Text>Search</Text>
        </View>
      </TouchableNativeFeedback>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }} >
        <Image source={require("../../assets/images/settings.png")} />
        <Text>Setting</Text>
      </View>
    </View>
  )
}

export default BottomBar