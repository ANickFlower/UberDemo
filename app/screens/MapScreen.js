import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.background}>
      <View style={styles.map}>
        <Map />
      </View>
      <View style={styles.content}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
