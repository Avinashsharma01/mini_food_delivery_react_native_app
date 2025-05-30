import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../navigation/AppNavigator';
import CartItemCard from '../components/CartItemCard';
import {useCart} from '../context/CartContext';

type CartScreenProps = StackScreenProps<StackParamList, 'Cart'>;

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const {cart, clearCart, getTotalPrice} = useCart();

  const handleCheckout = () => {
    if (cart.length === 0) {
      Alert.alert(
        'Empty Cart',
        'Please add items to your cart before checkout.',
      );
      return;
    }

    navigation.navigate('OrderSummary');
  };

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate('Menu')}>
            <Text style={styles.shopButtonText}>Browse Menu</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id}
            renderItem={({item}) => <CartItemCard item={item} />}
            contentContainerStyle={styles.cartItemsList}
          />

          <View style={styles.cartSummary}>
            <TouchableOpacity
              style={styles.clearCartButton}
              onPress={() => {
                Alert.alert(
                  'Clear Cart',
                  'Are you sure you want to clear your cart?',
                  [
                    {text: 'Cancel', style: 'cancel'},
                    {text: 'Clear', style: 'destructive', onPress: clearCart},
                  ],
                );
              }}>
              <Text style={styles.clearCartText}>Clear Cart</Text>
            </TouchableOpacity>

            <View style={styles.totalContainer}>
              <Text style={styles.totalLabel}>Total:</Text>
              <Text style={styles.totalAmount}>
                ${getTotalPrice().toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shopButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartItemsList: {
    paddingVertical: 8,
  },
  cartSummary: {
    backgroundColor: 'white',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  clearCartButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  clearCartText: {
    color: '#FF6347',
    fontWeight: '500',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  checkoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CartScreen;
