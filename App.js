import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons';
import { HomeScreen } from './screens/HomeScreen'; // Đảm bảo bạn có file HomeScreen.js
import { ScanScreen } from './screens/ScanScreen'; // Đảm bảo bạn có file ScanScreen.js

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack navigator cho Home và Scan
function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }}  // Tắt header mặc định
      />
      <Stack.Screen 
        name="Scan" 
        component={ScanScreen}
        options={{ headerShown: false }}  // Tắt header mặc định
      />
    </Stack.Navigator>
  );
}

// DummyScreen dùng tạm cho các tab khác
const DummyScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Coming Soon</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Chọn icon dựa trên tên của route
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan-circle' : 'scan-circle-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            // Trả về icon với màu và kích thước dựa trên trạng thái
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#42A5F5',  // Màu khi tab được chọn
          tabBarInactiveTintColor: 'gray',   // Màu khi tab không được chọn
          tabBarStyle: { 
            height: 60,                      // Chiều cao của thanh tab
            paddingBottom: 10,               // Khoảng cách giữa biểu tượng và cạnh dưới
            paddingTop: 10                   // Khoảng cách giữa biểu tượng và cạnh trên
          },
          tabBarLabelStyle: { 
            fontSize: 12                     // Kích thước chữ dưới icon
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={MainStack} 
          options={{ tabBarLabel: 'Home' }} 
        />
        <Tab.Screen 
          name="Notifications" 
          component={DummyScreen} 
          options={{ tabBarLabel: 'Notifications' }} 
        />
        <Tab.Screen 
          name="Scan" 
          component={ScanScreen} 
          options={{ tabBarLabel: 'Scan' }} // Không có label dưới icon Scan
        />
        <Tab.Screen 
          name="History" 
          component={DummyScreen} 
          options={{ tabBarLabel: 'History' }} 
        />
        <Tab.Screen 
          name="Cart" 
          component={DummyScreen} 
          options={{ tabBarLabel: 'Cart' }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
