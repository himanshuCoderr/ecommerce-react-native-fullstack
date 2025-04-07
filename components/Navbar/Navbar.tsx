import { View, Image } from "react-native"

function Navbar() {
    return (
        <View style={{flexDirection: "row", justifyContent: "space-between" }} >
            <Image source={require("../../assets/images/menu.png")} />
            <Image source={require("../../assets/images/company-logo.png")} />
            <Image source={require("../../assets/images/user-image.png")} />
        </View>
    )
}

export default Navbar