import { View, Text } from "react-native";
import { ScrollView } from "react-native";
import styles from "../../components/Styles";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import BottomBar from "../../components/BottomBar/BottomBar";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function Search() {
    return (
        <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
            <ScrollView
                style={[styles.container]}
                contentContainerStyle={{
                    paddingBottom: 120,
                    backgroundColor: "#FDFDFD"
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    width: "100%",
                    padding: 20
                }}>
                    <Navbar />
                    <SearchBar />

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: 20
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>52,000+ Products</Text>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                    padding: 10,
                                    elevation: 2,  // Add shadow for Android
                                    shadowColor: '#000',  // Add shadow for iOS
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Sort</Text>
                                <Image source={require("../../assets/images/sort-icon.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                    backgroundColor: "white",
                                    borderRadius: 10,
                                    padding: 10,
                                    elevation: 2,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 4
                                }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Filter</Text>
                                <Image source={require("../../assets/images/filter-icon.png")} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />  
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />  
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />  
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />  
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />
                        <ProductCard
                            image="https://images.unsplash.com/photo-1619222815378-31e8614d12a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRpc3xlbnwwfHwwfHx8MA%3D%3D"
                            title="Black Winter..."
                            description="Autumn And Winter Casual cotton-padded jacket..."
                            price="499"
                            rating="4.5"
                        />  
                    </View>
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    );
}