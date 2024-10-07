import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image
           source={require('C:\Mobile\Screen\image\avatar.jpg')}
          style={styles.avatar}
        />
      </View>

      {/* Insights */}
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="scan-outline" size={30} color="#5C6BC0" />
          <Text style={styles.insightText}>Scan new</Text>
          <Text style={styles.insightSubText}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="alert-circle-outline" size={30} color="#EF5350" />
          <Text style={styles.insightText}>Counterfeits</Text>
          <Text style={styles.insightSubText}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="checkmark-circle-outline" size={30} color="#66BB6A" />
          <Text style={styles.insightText}>Success</Text>
          <Text style={styles.insightSubText}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.insightBox}>
          <Ionicons name="time-outline" size={30} color="#42A5F5" />
          <Text style={styles.insightText}>Directory</Text>
          <Text style={styles.insightSubText}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More */}
      <View style={styles.exploreMore}>
        <Text style={styles.exploreText}>Explore More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F7F7', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  hello: { fontSize: 24, fontWeight: '600' },
  name: { fontSize: 18, color: 'gray' },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  insightsContainer: { marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  insightBox: { backgroundColor: 'white', width: '48%', padding: 20, borderRadius: 10, marginBottom: 20 },
  insightText: { fontSize: 16, fontWeight: '600', marginTop: 10 },
  insightSubText: { fontSize: 12, color: 'gray', marginTop: 5 },
  exploreMore: { marginTop: 30 },
  exploreText: { fontSize: 16, color: '#42A5F5', fontWeight: '600' }
});
