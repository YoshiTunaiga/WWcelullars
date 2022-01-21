import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

import { Icon } from "react-native-elements/dist/icons/Icon";

import colors from "../config/colors";

const ProductScreen = ({ navigation, route }) => {
  const { id, imageUrl, price, name, description, rating } = route.params;
  // const product = route.params;
  //   // let rate = Math.floor(rating.rate);
  //   // while(rate--)
  // console.log(route.params);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productsContainer}>
          <View key={id} style={styles.item}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
            <Text
              style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}
            >
              {name}
            </Text>
            <Text
              style={{
                marginVertical: 10,
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Price: ${price}
            </Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                BUY
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                textAlign: "center",
              }}
            >
              Description
            </Text>
            <Text style={{ marginVertical: 5 }}>{description}</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Rating: ⭐️⭐️⭐️
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flex: 1,
    height: 1000,
    margin: 30,
    paddingBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
    left: 30,
  },
  item: {
    flex: 1,
    width: 280,
    alignSelf: "stretch",
    marginVertical: 10,
    paddingVertical: 20,
  },
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 20,
    marginVertical: 15,
    borderRadius: 20,
  },
});

export default ProductScreen;
