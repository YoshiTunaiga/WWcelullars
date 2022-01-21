import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import db from "../../config/firebase";
import colors from "../../config/colors";
import { Card } from "react-native-shadow-cards";

export default function MainScreen() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

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

  // console.log(products);
  // useEffect(() => {
  //   let ignore = false;
  //   async function fetchData() {
  //     const result = await axios("https://fakestoreapi.com/products");
  //     if (!ignore) setProducts(result.data);
  //   }
  //   fetchData();
  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.productsContainer}>
          {products.length < 1 ? (
            <View>
              <Text>No Products Yet</Text>
            </View>
          ) : (
            products.map((product) => (
              <View key={product.id} style={styles.item}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Product", product)}
                >
                  <Card
                    style={{
                      alignItems: "center",
                      backgroundColor: colors.primary,
                      width: 250,
                      justifyContent: "center",
                    }}
                    opacity={1}
                    elevation={6}
                    cornerRadius={9}
                  >
                    <View
                      style={{
                        backgroundColor: colors.primary,
                        borderRadius: 30,
                        margin: 10,
                        marginLeft: 30,
                        width: "50%",
                      }}
                    >
                      <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={{
                          uri: product.imageUrl,
                        }}
                      />
                    </View>
                  </Card>

                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 10,
                      textAlign: "center",
                    }}
                  >
                    {product.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 190,
    height: 190,
    margin: 10,
    right: 50,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 5,
  },
  navbar: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    flex: 1,
    // width: 200,
    alignSelf: "stretch",
    margin: 20,
    marginLeft: 40,
    paddingVertical: 10,

    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  productsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "stretch",
    marginTop: -20,
    justifyContent: "center",
  },
});

// export default MainScreen;

/*
Array [
  {
    "brand": "Kingston",
    "description": "This microSDHC memory card offers a much larger capacity to store music, video and pictures, so as to satisfy your various needs. And you could enjoy as much as its powerful advantages, which provides you a smooth and fast experience. Adopting class-rating, microSDHC ensures its transmission speed and a best performance for you Features: Micro SDHC flash memory card is a combination of mini size and SDHC standard.Class4 specifications enable fast file transmission speed (minimal speed up to 4MB/s) and full-HD video recording Wide compatibility for micro SDHC enabled devices Water resistant, temperature proof, shock resistant, X-ray proof. It will be your secure choice even if in adverse circumstances Kingston provides lifetime warranty service and free technical support.*Note: Adapter is not included. It requires additional purchase This micro SDHC only works in device that support SDHC. Please check your card reader and relative devices whether there are micro SDHC symbol on before you use it",
    "imageUrl": "https://i5.walmartimages.com/asr/978dabfd-1164-4188-805f-9535ea3c5821.6c7d4e3c339d8bd3097a91ec1a1c7028.jpeg",
    "name": "Kingston Ultra 32GB microSDHC Class 4 TF Memory Card for Camera Car Phone Tablet PC Water Shock Resistant",
    "newOrUsed": "new",
    "price": 12,
    "quantity": 5,
  },
  {
    "brand": "ADATA",
    "description": "The sleek design features a sliding USB connector, which smoothly extends from the drive at the push of a thumb. The capless mechanical design eliminates the hassle of lost drive caps. The USB connector can be made ready for use with just one hand, for greater convenience when speed is a must.",
    "imageUrl": "https://i5.walmartimages.com/asr/0177799c-7cd7-4d83-b9c2-533afce4ad8a.93cf49bfeed88b0b4dd524975e7c4b18.jpeg",
    "name": "ADATA UV128 64GB USB 3.0 Retractable Capless Flash Drive",
    "newOrUsed": "new",
    "price": 16,
    "quantity": 5,
  },
  {
    "brand": "Kuteck",
    "description": "Class 4 Kingston Ultra Micro SD Memory Card 16GB The 16GB Kingston microSDHC memory card combines massive storage capacity and blazing data transfer rates. With excellent performance and value, this card represents an ideal recording media for your HERO3 camera. Capture, store, and relive your exhilarating moments forever with SanDisk waterproof, temperature proof, shock proof, vibration proof, and x-ray proof memory cards. Kingston microSDHC memory cards deliver professional-grade performance for GoPro videos Form factor: microSDHC Capacity: 16 GB Class Rating: Class 4 File Format: FAT 32 Dimensions: 0.43\\\" x 0.59\\\" x 0.039\\\" (11mm x 15mm x 1mm) Operating temperature: 13o F to 185o F (-25o C to 85o C) Storage temperature: 40o F to 185o F (-40o C to 85o C) Compatibility: Compatible with all microSDHC supporting host devices Warranty: 5 Years Manufacturer Warranty",
    "imageUrl": "https://i5.walmartimages.com/asr/1b12d998-5ae9-4d11-8575-21a727c924d7_1.9e367aaf8f581e6261c73a6dbb1af083.jpeg",
    "name": "Class 4 Kingston Ultra Micro SD Memory Card 16GB",
    "newOrUsed": "new",
    "price": 8,
    "quantity": 5,
  },
  {
    "brand": "Apple",
    "description": "This 2-metre USB 2.0 cable connects your iPhone, iPad or iPod with Lightning connector to your computer's USB port for syncing and charging or to the Apple USB Power Adapter for convenient charging from a power point",
    "imageUrl": "https://i5.walmartimages.com/asr/57fab17c-7948-4084-b0b6-d9732d9263f5.20da32ea762c132103f1a58f5a2d7887.jpeg",
    "name": "Apple Lightning to USB Cable (2m)",
    "newOrUsed": "new",
    "price": 25,
    "quantity": 5,
  },
]

*/

// /*
// Object {
//   "key": "Product-TO__L7OZcI_X3w3acvGJU",
//   "name": "Product",
//   "params": Object {
//     "category": "men's clothing",
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "id": 1,
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "price": 109.95,
//     "rating": Object {
//       "count": 120,
//       "rate": 3.9,
//     },
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   },
//   "path": undefined,
// }
// */

// class MainScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       products: null,
//     };
//   }

//   componentDidMount() {
//     return fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((responseJson) => {
//         this.setState({
//           isLoading: false,
//           products: responseJson,
//         });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }

//   render() {
//     const { navigation } = this.props;

//     if (this.state.isLoading) {
//       return (
//         <View style={styles.container}>
//           <ActivityIndicator />
//         </View>
//       );
//     } else {
//       let sort = null;
//       let products1 = this.state.products;
//       let result = products1.filter(
//         (product) => product.category === "electronics"
//       );
//       console.log("Sort Now have been changed to ==>> ", sort);
//       let products = result.map((product, key) => {
//         return (
//           <View key={key} style={styles.item}>
//             <TouchableOpacity
//               onPress={() => navigation.navigate("Product", product)}
//             >
//               <View
//                 style={{
//                   backgroundColor: colors.primary,
//                   borderRadius: 30,
//                   margin: 10,
//                   width: "200%",
//                 }}
//               >
//                 <Image
//                   resizeMode="contain"
//                   style={styles.image}
//                   source={{
//                     uri: product.image,
//                   }}
//                 />
//               </View>
//             </TouchableOpacity>
//             <Text style={{ fontWeight: "bold" }}>{product.title}</Text>
//             <Text>Price: ${product.price}</Text>
//           </View>
//         );
//       });

//       return (
//         <ScrollView>
//           <View style={styles.container}>
//             {/* <View style={styles.navbar}>
//               <TouchableOpacity
//                 onPress={() => {
//                   console.log("I've been touched as MENU");
//                   Alert.alert("No MENU YET");
//                 }}
//               >
//                 <Icon name="menu" size={35} />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate("Main")}>
//                 <Icon name="home" size={35} />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => {
//                   // console.log("Ive Been touched as CART!!");
//                   Alert.alert("Nothing on Cart yet.");
//                   // navigation.navigate("Cart");
//                 }}
//               >
//                 <Icon name="shopping-cart" size={35} />
//               </TouchableOpacity>
//             </View>
//             <SelectDropdown
//               data={["Price", "Category"]}
//               defaultButtonText="Sort By"
//               dropdownIconPosition="right"
//               onSelect={(selected, index) => {
//                 console.log(selected, index);
//                 let selection = selected.toLowerCase();
//                 Alert.alert(`"Sorting by ${selected}"`);
//                 sort = selection;
//                 console.log("this is sort=>>", sort);
//               }}
//             /> */}

//             <View style={styles.productsContainer}>{products}</View>
//           </View>
//         </ScrollView>
//       );
//     }
//   }
// }
