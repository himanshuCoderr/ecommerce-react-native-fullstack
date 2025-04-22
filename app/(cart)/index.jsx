import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Cart = () => {
    const [showPayment, setShowPayment] = useState(false);

    const PaymentSection = () => (
        <View style={styles.paymentSection}>
            <View style={styles.orderSummary}>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Order</Text>
                    <Text style={styles.summaryValue}>₹ 7,000</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Shipping</Text>
                    <Text style={styles.summaryValue}>₹ 30</Text>
                </View>
                <View style={[styles.summaryRow, styles.totalRow]}>
                    <Text style={styles.summaryTotal}>Total</Text>
                    <Text style={styles.summaryTotal}>₹ 7,030</Text>
                </View>
            </View>

            <Text style={styles.paymentTitle}>Payment</Text>
            
            {/* Payment Methods */}
            <View style={styles.paymentMethods}>
                <TouchableOpacity 
                    style={[styles.paymentOption, styles.selectedPayment]}
                >
                    {/* <Image 
                        source={require('../../assets/images/visa.png')} 
                        style={styles.paymentIcon}
                    /> */}
                    <Text style={styles.paymentText}>•••••••••••••2109</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentOption}>
                    {/* <Image 
                        source={require('../../assets/images/paypal.png')} 
                        style={styles.paymentIcon}
                    /> */}
                    <Text style={styles.paymentText}>•••••••••••••2109</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentOption}>
                      {/* <Image 
                          source={require('../../assets/images/mastercard.png')} 
                          style={styles.paymentIcon}
                      /> */}
                      <Text style={styles.paymentText}>•••••••••••••2109</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.paymentOption}>
                      {/* <Image 
                          source={require('../../assets/images/apple-pay.png')} 
                          style={styles.paymentIcon}
                      /> */}
                    <Text style={styles.paymentText}>•••••••••••••2109</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setShowPayment(false)}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>
                    {showPayment ? 'Checkout' : 'Shopping Bag'}
                </Text>
                <TouchableOpacity>
                    <Ionicons name="heart-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                {!showPayment ? (
                    // Original Cart Content
                    <>
                        {/* Product Item */}
                        <View style={styles.productCard}>
                            <Image 
                                source={{ uri: 'https://images.unsplash.com/photo-1619222815378-31e8614d12a7' }}
                                style={styles.productImage}
                            />
                            <View style={styles.productInfo}>
                                <Text style={styles.productTitle}>Women's Casual Wear</Text>
                                <Text style={styles.productSubtitle}>Checked Single-Breasted Blazer</Text>
                                
                                <View style={styles.productOptions}>
                                    <View style={styles.optionContainer}>
                                        <Text style={styles.optionLabel}>Size</Text>
                                        <View style={styles.optionSelector}>
                                            <Text>42</Text>
                                            <Ionicons name="chevron-down" size={20} color="#666" />
                                        </View>
                                    </View>
                                    
                                    <View style={styles.optionContainer}>
                                        <Text style={styles.optionLabel}>Qty</Text>
                                        <View style={styles.optionSelector}>
                                            <Text>1</Text>
                                            <Ionicons name="chevron-down" size={20} color="#666" />
                                        </View>
                                    </View>
                                </View>

                                <Text style={styles.deliveryText}>Delivery by <Text style={styles.deliveryDate}>10 May XXXX</Text></Text>
                            </View>
                        </View>

                        {/* Apply Coupons */}
                        <TouchableOpacity style={styles.couponSection}>
                            <View style={styles.couponLeft}>
                                <Ionicons name="ticket-outline" size={24} color="#666" />
                                <Text style={styles.couponText}>Apply Coupons</Text>
                            </View>
                            <View style={styles.couponRight}>
                                <Text style={styles.selectText}>Select</Text>
                                <Ionicons name="chevron-forward" size={20} color="#E47C99" />
                            </View>
                        </TouchableOpacity>

                        {/* Order Details */}
                        <View style={styles.orderDetails}>
                            <Text style={styles.orderTitle}>Order Payment Details</Text>
                            
                            <View style={styles.orderRow}>
                                <Text>Order Amounts</Text>
                                <Text>₹ 7,000.00</Text>
                            </View>
                            
                            <View style={styles.orderRow}>
                                <View style={styles.rowWithLink}>
                                    <Text>Convenience</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.knowMore}>Know More</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.applyCoupon}>Apply Coupon</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <View style={styles.orderRow}>
                                <Text>Delivery Fee</Text>
                                <Text style={styles.freeText}>Free</Text>
                            </View>

                            <View style={[styles.orderRow, styles.totalRow]}>
                                <Text style={styles.totalText}>Order Total</Text>
                                <Text style={styles.totalAmount}>₹ 7,000.00</Text>
                            </View>

                            <TouchableOpacity style={styles.emiButton}>
                                <Text>EMI Available</Text>
                                <Text style={styles.detailsLink}>Details</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    // Payment Section
                    <PaymentSection />
                )}
            </ScrollView>

            {!showPayment && (
                <View style={styles.bottomBar}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.finalPrice}>₹ 7,000.00</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewDetails}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                        style={styles.paymentButton}
                        onPress={() => setShowPayment(true)}
                    >
                        <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    content: {
        flex: 1,
    },
    productCard: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    productImage: {
        width: 100,
        height: 120,
        borderRadius: 8,
        marginRight: 15,
    },
    productInfo: {
        flex: 1,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    productSubtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
    },
    productOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    optionContainer: {
        flex: 1,
        marginRight: 10,
    },
    optionLabel: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4,
    },
    optionSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderRadius: 6,
        padding: 8,
    },
    deliveryText: {
        fontSize: 14,
        color: '#666',
    },
    deliveryDate: {
        fontWeight: '600',
        color: '#000',
    },
    couponSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    couponLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    couponText: {
        fontSize: 16,
        fontWeight: '500',
    },
    couponRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectText: {
        color: '#E47C99',
        marginRight: 4,
    },
    orderDetails: {
        padding: 15,
    },
    orderTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
    },
    orderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    rowWithLink: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    knowMore: {
        color: '#E47C99',
        fontSize: 12,
    },
    applyCoupon: {
        color: '#E47C99',
    },
    freeText: {
        color: '#4CAF50',
    },
    totalRow: {
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        paddingTop: 15,
        marginTop: 15,
    },
    totalText: {
        fontSize: 16,
        fontWeight: '600',
    },
    totalAmount: {
        fontSize: 16,
        fontWeight: '600',
    },
    emiButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 12,
        borderRadius: 6,
        marginTop: 15,
    },
    detailsLink: {
        color: '#E47C99',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#EEEEEE',
        backgroundColor: 'white',
    },
    priceContainer: {
        flex: 1,
    },
    finalPrice: {
        fontSize: 18,
        fontWeight: '600',
    },
    viewDetails: {
        color: '#E47C99',
        fontSize: 12,
    },
    paymentButton: {
        backgroundColor: '#E47C99',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    paymentButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    paymentSection: {
        padding: 20,
    },
    orderSummary: {
        backgroundColor: '#F8F8F8',
        padding: 20,
        borderRadius: 12,
        marginBottom: 24,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    summaryLabel: {
        color: '#666',
        fontSize: 16,
    },
    summaryValue: {
        fontSize: 16,
    },
    paymentTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    paymentMethods: {
        gap: 12,
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    selectedPayment: {
        borderColor: '#E47C99',
        backgroundColor: '#FFF',
    },
    paymentIcon: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    paymentText: {
        fontSize: 16,
        color: '#333',
    },
    continueButton: {
        backgroundColor: '#E47C99',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 24,
    },
    continueButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Cart;