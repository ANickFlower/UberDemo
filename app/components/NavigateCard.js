import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import NavFavorites from "./NavFavorites";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.areaView}>
      <Text style={styles.greeting}>Good Morning, Nick</Text>
      <View style={styles.container}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to"
            styles={toInputBoxStyles}
            fetchDetails={true}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        <NavFavorites />
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.ridesButton}>
          <Icon name="car" type="font-awesome" color="white" size={20} />
          <Text style={styles.rides}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.eatsButton}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={20}
          />
          <Text style={styles.eats}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  areaView: {
    backgroundColor: "white",
    flex: 1,
  },
  bottomButtons: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-evenly",
    paddingVertical: 2,
    marginTop: "auto",
    borderTopColor: "gainsboro",
  },
  container: {
    borderColor: "gainsboro",
    borderStyle: "solid",
    borderWidth: 2,
    flexShrink: 1,
  },
  eats: {
    textAlign: "center",
    color: "black",
  },
  eatsButton: {
    flexDirection: "row",
    width: 100,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  greeting: {
    alignSelf: "center",
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },

  rides: {
    color: "white",
    textAlign: "center",
  },
  ridesButton: {
    flexDirection: "row",
    width: 100,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "black",
    justifyContent: "space-between",
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "gainsboro",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
