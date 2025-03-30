import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const HomeScreen = () => {
  const { authState, logout } = useAuth();

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.welcome}>Hoş Geldiniz!</Text>
        <Text style={styles.username}>
          {authState.userData ? authState.userData.username : 'Kullanıcı'}
        </Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Expo React Native Template</Text>
          <Text style={styles.cardText}>
            Bu uygulama taslağını özelleştirerek kendi projelerinizi hızlıca geliştirebilirsiniz.
          </Text>
          <Text style={styles.cardText}>
            Bu taslak, giriş/kayıt ekranları, temel navigasyon ve tema yapısı içerir.
          </Text>
        </View>
        
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Özellikleri:</Text>
          
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>• Kimlik Doğrulama</Text>
            <Text style={styles.featureText}>Kullanıcı giriş, kayıt ve oturum yönetimi</Text>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>• Navigasyon</Text>
            <Text style={styles.featureText}>React Navigation ile çoklu sayfa yapısı</Text>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>• Context API</Text>
            <Text style={styles.featureText}>Global state yönetimi için Context yapısı</Text>
          </View>
          
          <View style={styles.feature}>
            <Text style={styles.featureTitle}>• Responsive Tasarım</Text>
            <Text style={styles.featureText}>Farklı ekranlara uyumlu kullanıcı arayüzü</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  username: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    lineHeight: 22,
  },
  featuresContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  feature: {
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    paddingLeft: 15,
  },
  logoutButton: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen; 