import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, View } from 'react-native';

import AddCity from './src/AddCity/AddCity';
import AddCountry from './src/AddCity/AddCountry';
import Countries from './src/AddCity/Countries';
import Cities from './src/Cities/Cities';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CityPlaceholder() {
  return (
    <View>
      <Text>City Details Placeholder</Text>
    </View>
  );
}

function CitiesStackScreen({ cities }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>
      <Stack.Screen name="City" component={CityPlaceholder} />
    </Stack.Navigator>
  );
}

export default function App() {
  // Cities data (from HOS)
  const [cities, setCities] = useState([]);

  const addCity = (city) => {
    setCities([...cities, city]);
  };

  // Countries data (new for PE05)
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries([...countries, country]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CitiesNav">
          {(props) => <CitiesStackScreen {...props} cities={cities} />}
        </Tab.Screen>
        <Tab.Screen name="AddCity">
          {(props) => <AddCity {...props} addCity={addCity} />}
        </Tab.Screen>
        <Tab.Screen name="Countries">
          {(props) => <Countries {...props} countries={countries} />}
        </Tab.Screen>
        <Tab.Screen name="AddCountry">
          {(props) => <AddCountry {...props} addCountry={addCountry} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}