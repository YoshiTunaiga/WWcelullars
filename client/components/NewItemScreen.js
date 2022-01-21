import React, { useState } from "react";
import { auth } from "../config/firebase";
import {
  View,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { StyledButton, StyledButtonText, Input } from "../config/colors";
import * as ImagePicker from "expo-image-picker";

const NewItemScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
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

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View>
          <View style={{ margin: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Back</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text
              style={{ fontSize: 20, marginBottom: -10, fontWeight: "bold" }}
            >
              New Item
            </Text>
            <Input
              clearButtonMode="while-editing"
              maxLength={100}
              keyboardType="twitter"
              placeholder="Item Name"
              value={name}
              onChangeText={(text) => setName(text)}
            ></Input>
            <Input
              maxLength={2}
              keyboardType="number-pad"
              placeholder="Item Quantity"
              value={quantity}
              onChangeText={(qty) => setQuantity(Number(qty))}
            ></Input>
            <Input
              maxLength={2}
              keyboardType="number-pad"
              placeholder="Price"
              value={price}
              onChangeText={(price) => setPrice(Number(price))}
            ></Input>
            <TextInput
              style={styles.bioText}
              maxLength={100}
              multiline={true}
              keyboardType="twitter"
              placeholder="Enter a Description"
              value={description}
              onChangeText={(text) => setDescription(text)}
            ></TextInput>
            <View style={{ justifyContent: "center", alignSelf: "center" }}>
              <TouchableOpacity
                onPress={openImagePickerAsync}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Pick a photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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

export default NewItemScreen;
