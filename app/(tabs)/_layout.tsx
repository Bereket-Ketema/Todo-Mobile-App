import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
        title: 'Todo',
        tabBarIcon: ({ color }) => <AntDesign name="check-square" size={24} color="black" />,
      }}
    />
    </Tabs>

  );
}
