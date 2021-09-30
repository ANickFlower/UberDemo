import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.button}
          disabled={!origin}
        >
          <View style={!origin ? styles.unusableButtons : styles.usableButton}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text style={styles.buttonText}>{item.title}</Text>
            <Icon
              style={styles.arrow}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  unusableButtons: {
    opacity: 0.3,
  },
  button: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: "gainsboro",
    margin: 10,
    width: 125,
  },
  buttonText: {
    marginVertical: 10,
    fontWeight: "bold",
  },
  arrow: {
    padding: 2,
    backgroundColor: "black",
    width: 30,
    height: 30,
    borderRadius: 100,
  },
});

export default NavOptions;
