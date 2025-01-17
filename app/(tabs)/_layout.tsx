// Importa los componentes necesarios para el código
import { Tabs } from 'expo-router';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
// Retorna un componente Tabs que contiene las configuraciones de la navegación por pestañas
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Login',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={focused ? 'sign-in-alt' : 'sign-in-alt'} color={color} size={20} />
          ),
        }}
      />
    </Tabs>
  );
}
