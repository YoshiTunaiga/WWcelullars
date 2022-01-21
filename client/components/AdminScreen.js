import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import {
  View,
  Alert,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StyledButton, StyledButtonText } from "../config/colors";
import * as ImagePicker from "expo-image-picker";
import { collection, getDocs } from "firebase/firestore";
import db from "../config/firebase";
import { Card } from "react-native-elements";
import UploadImage from "./UploadImage";

const AdminScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }

  async function handleSignOut() {
    try {
      const user = await auth.signOut();
      if (!user) {
        navigation.navigate("Welcome");
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  useEffect(() => {
    async function getItems() {
      const querySnapshot = await getDocs(collection(db, "items"));
      const productsArray = [];
      querySnapshot.forEach((doc) => {
        let product = doc.data();
        let id = doc.id;
        product["id"] = id;
        productsArray.push(product);
        setProducts([...productsArray]);
      });
      return productsArray;
    }
    const result = getItems();
    setIsLoading(false);
  }, []);

  console.log("====================================");
  console.log(products);
  console.log("====================================");
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 30,
                marginTop: 10,
                marginLeft: 10,
              }}
            >
              Welcome,{" "}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Card>
              <Card.Title>Products Available</Card.Title>
              <Card.Divider />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {products.map((product) => (
                  <View key={product.id}>
                    <Image
                      style={{ width: 70, height: 70, marginHorizontal: 10 }}
                      resizeMode="cover"
                      source={{ uri: product.imageUrl }}
                    />
                  </View>
                ))}
              </View>
            </Card>
          </View>
          <StyledButton
            onPress={handleSignOut}
            style={{ marginBottom: 80, marginTop: 20 }}
          >
            <StyledButtonText>Log Out</StyledButtonText>
          </StyledButton>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    borderRadius: 10,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  bioText: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10,
    width: 250,
    height: 200,
    marginBottom: 10,
  },
});
