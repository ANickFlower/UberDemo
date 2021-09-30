import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "2848 Harmony Ridge, Arnold, MO, USA",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination:
      "Painting with a Twist, The Boulevard Saint Louis, St. Louis, MO, USA",
  },
];

const NavFavorites = () => {
  //const dispatch = useDispatch();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{ backgroundColor: "gainsboro", height: 0.5 }} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={styles.buttons}>
          <Icon
            style={styles.icon}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.destination}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    marginRight: 4,
    borderRadius: 30,
    borderWidth: 10,
    borderColor: "gainsboro",
    backgroundColor: "gainsboro",
    padding: 3,
  },
  location: {
    fontWeight: "bold",
    fontSize: 20,
  },
  destination: {
    color: "gainsboro",
  },
});
