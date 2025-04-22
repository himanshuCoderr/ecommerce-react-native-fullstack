import { View, Image, Text } from "react-native"
import { getSecure } from "../../utilies/SecureStore/SecureStore"

function Navbar() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between" }} >
            <Image source={require("../../assets/images/menu.png")} />
            <Image source={require("../../assets/images/company-logo.png")} />
            <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                <Image source={require("../../assets/images/user-image.png")} />
                <Text  >{getSecure('userName')}</Text>
            </View>
        </View>
    )
}

export default Navbar