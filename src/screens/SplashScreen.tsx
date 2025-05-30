import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {useNavigation, NavigationProp} from '@react-navigation/native';

type RootStackParamList = {
  Menu: undefined;
  // add other routes here if needed
};

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Simulate loading process, then navigate to Menu
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Menu'}],
      });
    }, 1000); // 1 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Food Delivery</Text>
        <Text style={styles.subtitle}>Delicious food at your doorstep</Text>
        <ActivityIndicator
          style={styles.loading}
          size="large"
          color="#FF6347"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 48,
  },
  loading: {
    marginTop: 20,
  },
});

export default SplashScreen;
