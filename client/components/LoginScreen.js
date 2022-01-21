import React, { useState, useEffect } from "react";
import { auth } from "../config/firebase";
import { View, Alert, Platform, Pressable, Image } from "react-native";
import {
  Container,
  Login,
  LoginText,
  StyledButton,
  StyledButtonText,
  Input,
} from "../config/colors";

export const user = auth.currentUser;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user !== null) {
      navigation.navigate("Main");
    }
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Admin");
      }
    });
    return unsubscribe;
  }, []);

  async function handleLogin() {
    try {
      email.replace(/\s/g, "");
      password.replace(/\s/g, "");
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential.user;
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Container {...(Platform.OS === "ios" ? { behavior: "padding" } : null)}>
      <View>
        <Login>
          <Image
            style={{ width: 120, height: 120 }}
            resizeMode="cover"
            source={require("../assets/wwcellulars.png")}
          />
          <LoginText>Get Ready!</LoginText>
          <Input
            autoCapitalize="none"
            keyboardType="email-address"
            clearButtonMode="while-editing"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          ></Input>
          <Input
            clearButtonMode="while-editing"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          ></Input>
          <StyledButton onPress={handleLogin}>
            <StyledButtonText>Login</StyledButtonText>
          </StyledButton>
          <Pressable
            onPress={() => {
              navigation.navigate("Main");
            }}
          ></Pressable>
        </Login>
      </View>
    </Container>
  );
};

export default LoginScreen;
