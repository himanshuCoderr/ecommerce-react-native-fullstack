import { View, Image, Text } from "react-native"
import { getSecure } from "../../utilies/SecureStore/SecureStore"
import { useState, useEffect } from "react"
import { signOut } from "firebase/auth"
import {auth} from "../../firebase"
import { TouchableOpacity } from "react-native"
import { router } from "expo-router"
import { deleteSecure } from "../../utilies/SecureStore/SecureStore"
import { useAuth } from "../../context/AuthContext"

function Navbar() {
    const [showLogOut, setShowLogOut] = useState(false)
    const [userName, setUserName] = useState<string | null>(null)
    const { user } = useAuth()

    useEffect(() => {
        const loadUserName = async () => {
            if (user) {
                const name = await getSecure('userName')
                setUserName(name)
            } else {
                setUserName(null)
            }
        }
        loadUserName()
    }, [user])

    const handleLogout = async () => {
        try {
            await signOut(auth)
            await deleteSecure('userEmail')
            await deleteSecure('userName')
            await deleteSecure('userUid')
            await deleteSecure('accessToken')
            setUserName(null)
            setShowLogOut(false)
            // No need to manually navigate - AuthContext will handle it
        } catch (error) {
            console.error("Error during logout:", error)
        }
    }

    // If no user, don't render the navbar
    if (!user) return null

    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
            <Image source={require("../../assets/images/menu.png")} />
            <Image source={require("../../assets/images/company-logo.png")} />
            <TouchableOpacity onPress={() => setShowLogOut(!showLogOut)}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}  >
                    <Image source={require("../../assets/images/user-image.png")} />
                    <Text>{userName}</Text>
                </View>
            </TouchableOpacity>
            {
                showLogOut ? (
                    <TouchableOpacity 
                        style={{ position: "absolute", top: 30, right: 0 }} 
                        onPress={handleLogout}
                    > 
                        <Text style={{ color: "red" }}>LogOut</Text>
                    </TouchableOpacity>
                ) : null
            }
        </View>
    )
}

export default Navbar