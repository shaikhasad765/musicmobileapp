import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SongDetailScreen from './screens/SongDetailScreen';
import { Image } from 'react-native';

// Create a navigation stack
const Stack = createStackNavigator();

function App() {
  return (
    // Wrap the entire app in a NavigationContainer to enable navigation
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Define the Home screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // Customize the header style (not used in this example)
          style={{ fontWeight: 'bold' }}
          // Hide the header for Home screen
          options={{ headerShown: false }}
        />

        {/* Define the SongDetail screen */}
        <Stack.Screen
          name="SongDetail"
          component={SongDetailScreen}
          // Set a custom title for the header
          options={{ title: 'YouTube' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
