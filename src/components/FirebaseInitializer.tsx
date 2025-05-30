import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {initializeFirestore} from '../services/initFirestore';
import {checkFirestoreData} from '../services/firebaseData';

interface FirebaseInitializerProps {
  children: React.ReactNode;
}

const FirebaseInitializer: React.FC<FirebaseInitializerProps> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initFirebase = async () => {
      try {
        const result = await initializeFirestore();
        if (result) {
          // Check Firestore data
          await checkFirestoreData();
        }
        setInitialized(result);
      } catch (err) {
        console.error('Failed to initialize Firebase:', err);
        setError(
          'Failed to connect to the database. Please check your connection and try again.',
        );
      }
    };

    initFirebase();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!initialized) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#FF6347" />
        <Text style={styles.loadingText}>Connecting to Firebase...</Text>
      </View>
    );
  }

  return <>{children}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
  },
});

export default FirebaseInitializer;
