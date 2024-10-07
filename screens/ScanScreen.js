import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scan Area */}
      <View style={styles.scanArea}>
        {/* Full-screen image */}
        <Image
          source={require('C:/Mobile/Screen/image/juice.png')} // Sử dụng require cho ảnh cục bộ
          style={styles.fullScreenImage}
          resizeMode="cover" // Đảm bảo ảnh bao phủ toàn màn hình
        />

        {/* Scan icon */}
        <View style={styles.scanIconContainer}>
          {/* Phóng to icon */}
          <Ionicons name="scan-outline" size={230} color="white" />
        </View>
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <View style={styles.productInfoBox}>
          <Image
            source={require('C:/Mobile/Screen/image/juice.png')} // Thumbnail for the product
            style={styles.productThumbnail}
          />
          <Text style={styles.productName}>Lauren's Orange Juice</Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white' 
  },
  
  // Full-screen image for Scan Area
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  fullScreenImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  // Centering the scan icon
  scanIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  // Product info styling
  productInfo: {
    padding: 20,
  },
  productInfoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
  },
  productThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#42A5F5',
    borderRadius: 10,
    padding: 10,
  },
});

