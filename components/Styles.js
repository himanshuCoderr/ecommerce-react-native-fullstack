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

  dealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    marginRight: 16,
    marginVertical: 8,
    width: 180,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF4B4B',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 1,
  },
  
  discountBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  
  productImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  
  productInfo: {
    padding: 8,
  },
  
  brandName: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
    fontWeight: '500',
  },
  
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
    height: 40,
  },
  
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  
  ratingContainer: {
    backgroundColor: '#FFF9E5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  
  rating: {
    fontSize: 12,
    color: '#FFB800',
    fontWeight: '600',
  },
  
  bottomInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  discount: {
    fontSize: 12,
    color: '#00A36C',
    fontWeight: '600',
  },
  
  stockWarning: {
    fontSize: 12,
    color: '#FF4B4B',
    fontWeight: '500',
  },
  
  outOfStock: {
    fontSize: 12,
    color: '#FF0000',
    fontWeight: '600',
  },

  specialOffer: { backgroundColor: "#FFD700", padding: 15, borderRadius: 10, marginTop: 10, alignItems: "center" },
  offerText: { fontSize: 16, fontWeight: "bold" },

  trendingSection: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    width: 160,  // Adjust based on your needs
    marginRight: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
