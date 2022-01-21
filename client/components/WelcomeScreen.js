import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Image
        style={styles.image}
        source={require("../assets/wwcellulars.png")}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => navigation.navigate("Main")}
        >
          <Text>ENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.enterButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text>Admin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 400,
    height: 400,
  },
  image: {
    width: 400,
    height: 400,
    margin: 30,
    position: "absolute",
    top: 50,
  },
  enterButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginRight: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    // backgroundColor: colors.white,
    position: "absolute",
    bottom: 40,
  },
});

export default WelcomeScreen;
