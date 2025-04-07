import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 10 },

  categoryList: { flexDirection: "row", marginBottom: 10 },
  categoryItem: { alignItems: "center", marginRight: 15 },
  categoryImage: { width: 50, height: 50, borderRadius: 25 },
  categoryText: { marginTop: 5, fontSize: 12 },

  banner: { backgroundColor: "#FF4081", padding: 20, borderRadius: 10, alignItems: "center" },
  bannerText: { fontSize: 18, color: "#fff", fontWeight: "bold" },
  button: { marginTop: 10, backgroundColor: "#fff", padding: 8, borderRadius: 5 },
  buttonText: { color: "#FF4081", fontWeight: "bold" },

  dealCard: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginRight: 10, width: 150 },
  productImage: { width: "100%", height: 100, borderRadius: 5 },
  productTitle: { fontSize: 14, fontWeight: "bold", marginTop: 5 },
  price: { fontSize: 14, color: "#333" },
  discount: { color: "red" },
  rating: { fontSize: 12, marginTop: 2 },

  specialOffer: { backgroundColor: "#FFD700", padding: 15, borderRadius: 10, marginTop: 10, alignItems: "center" },
  offerText: { fontSize: 16, fontWeight: "bold" },

  trendingSection: { marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginBottom: 5 },
});

export default styles;
