// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
// } from "react-native";
// import { Icon } from "react-native-elements/dist/icons/Icon";

// import colors from "../config/colors";

// const BoughtScreen = ({ navigation }) => {
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.navbar}>
//           <TouchableOpacity
//             onPress={() => {
//               console.log("I've been touched as MENU");
//               Alert.alert("No MENU YET");
//             }}
//           >
//             <Icon name="menu" size={35} />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate("Main")}>
//             <Icon name="home" size={35} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               navigation.navigate("Cart");
//             }}
//           >
//             <Icon name="shopping-cart" size={35} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.productContainer}>
//           <Text
//             style={{
//               justifyContent: "center",
//               textAlign: "center",
//               marginTop: 50,
//               fontSize: 30,
//             }}
//           >
//             Thank You for Shopping with Worldwide Cellulars, LLc
//           </Text>
//           <Image
//             style={styles.image}
//             source={require("../assets/wwcellulars.png")}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     alignItems: "center",
//     flex: 1,
//     justifyContent: "center",
//   },
//   image: {
//     width: 350,
//     height: 350,
//     margin: 20,
//   },
//   navbar: {
//     backgroundColor: colors.primary,
//     width: "100%",
//     height: 50,
//     alignItems: "center",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   productsContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems: "stretch",
//     marginTop: 5,
//     justifyContent: "center",
//   },
// });

// export default BoughtScreen;
