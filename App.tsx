/**
 * Mini Food Ordering App with Firebase
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {CartProvider} from './src/context/CartContext';

import FirebaseInitializer from './src/components/FirebaseInitializer';
import ErrorBoundary from './src/components/ErrorBoundary';

function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <CartProvider>
          <StatusBar barStyle="light-content" backgroundColor="#FF6347" />
          <FirebaseInitializer>
            <AppNavigator />
          </FirebaseInitializer>
        </CartProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}

export default App;
