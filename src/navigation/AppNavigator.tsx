/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';

// Import screens
import SplashScreen from '../screens/SplashScreen';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import OrderSummaryScreen from '../screens/OrderSummaryScreen';

export type StackParamList = {
  Splash: undefined;
  Menu: undefined;
  Cart: undefined;
  OrderSummary: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator: React.FC = () => {
  const {cart, getTotalPrice} = useCart();

  const CartButton = ({navigation}: any) => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={styles.cartText}>Cart ({itemCount})</Text>
        {itemCount > 0 && (
          <Text style={styles.cartTotal}>${getTotalPrice().toFixed(2)}</Text>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6347',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={({navigation}) => ({
            title: 'Food Menu',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Your Cart',
          }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummaryScreen}
          options={{
            title: 'Order Summary',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  cartButton: {
    marginRight: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  cartText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartTotal: {
    color: 'white',
    fontSize: 12,
  },
});

export default AppNavigator;
