// const db = require("./database");
// const Product = require("./models/Products");

// const seed = async () => {
//   try {
//     await db.sync();

//     await Promise.all(
//       products.map((product) => {
//         return Product.create(product);
//       })
//     );
//     console.log("SEEDING SUCCESS");
//     db.close();
//   } catch (err) {
//     console.log("Oh, SOMETHING IS WRONG");
//     console.log(error);
//     db.close();
//   }
// };

// module.exports = seed;

// const products = [
//   {
//     brand: "Kingston",
//     description:
//       "This microSDHC memory card offers a much larger capacity to store music, video and pictures, so as to satisfy your various needs. And you could enjoy as much as its powerful advantages, which provides you a smooth and fast experience. Adopting class-rating, microSDHC ensures its transmission speed and a best performance for you Features: Micro SDHC flash memory card is a combination of mini size and SDHC standard.Class4 specifications enable fast file transmission speed (minimal speed up to 4MB/s) and full-HD video recording Wide compatibility for micro SDHC enabled devices Water resistant, temperature proof, shock resistant, X-ray proof. It will be your secure choice even if in adverse circumstances Kingston provides lifetime warranty service and free technical support.*Note: Adapter is not included. It requires additional purchase This micro SDHC only works in device that support SDHC. Please check your card reader and relative devices whether there are micro SDHC symbol on before you use it",
//     imageUrl:
//       "https://i5.walmartimages.com/asr/978dabfd-1164-4188-805f-9535ea3c5821.6c7d4e3c339d8bd3097a91ec1a1c7028.jpeg",
//     name: "Kingston Ultra 32GB microSDHC Class 4 TF Memory Card for Camera Car Phone Tablet PC Water Shock Resistant",
//     newOrUsed: "new",
//     price: 12,
//     quantity: 5,
//   },
//   {
//     brand: "ADATA",
//     description:
//       "The sleek design features a sliding USB connector, which smoothly extends from the drive at the push of a thumb. The capless mechanical design eliminates the hassle of lost drive caps. The USB connector can be made ready for use with just one hand, for greater convenience when speed is a must.",
//     imageUrl:
//       "https://i5.walmartimages.com/asr/0177799c-7cd7-4d83-b9c2-533afce4ad8a.93cf49bfeed88b0b4dd524975e7c4b18.jpeg",
//     name: "ADATA UV128 64GB USB 3.0 Retractable Capless Flash Drive",
//     newOrUsed: "new",
//     price: 16,
//     quantity: 5,
//   },
//   {
//     brand: "Kuteck",
//     description:
//       'Class 4 Kingston Ultra Micro SD Memory Card 16GB The 16GB Kingston microSDHC memory card combines massive storage capacity and blazing data transfer rates. With excellent performance and value, this card represents an ideal recording media for your HERO3 camera. Capture, store, and relive your exhilarating moments forever with SanDisk waterproof, temperature proof, shock proof, vibration proof, and x-ray proof memory cards. Kingston microSDHC memory cards deliver professional-grade performance for GoPro videos Form factor: microSDHC Capacity: 16 GB Class Rating: Class 4 File Format: FAT 32 Dimensions: 0.43\\" x 0.59\\" x 0.039\\" (11mm x 15mm x 1mm) Operating temperature: 13o F to 185o F (-25o C to 85o C) Storage temperature: 40o F to 185o F (-40o C to 85o C) Compatibility: Compatible with all microSDHC supporting host devices Warranty: 5 Years Manufacturer Warranty',
//     imageUrl:
//       "https://i5.walmartimages.com/asr/1b12d998-5ae9-4d11-8575-21a727c924d7_1.9e367aaf8f581e6261c73a6dbb1af083.jpeg",
//     name: "Class 4 Kingston Ultra Micro SD Memory Card 16GB",
//     newOrUsed: "new",
//     price: 8,
//     quantity: 5,
//   },
//   {
//     brand: "Apple",
//     description:
//       "This 2-metre USB 2.0 cable connects your iPhone, iPad or iPod with Lightning connector to your computer's USB port for syncing and charging or to the Apple USB Power Adapter for convenient charging from a power point",
//     imageUrl:
//       "https://i5.walmartimages.com/asr/57fab17c-7948-4084-b0b6-d9732d9263f5.20da32ea762c132103f1a58f5a2d7887.jpeg",
//     name: "Apple Lightning to USB Cable (2m)",
//     newOrUsed: "new",
//     price: 25,
//     quantity: 5,
//   },
// ];
