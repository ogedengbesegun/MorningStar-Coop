// import 'dotenv/config';

// export default {
//     expo: {
//         name: "morningstar-coop",
//         slug: "MorningStar-Coop",
//         version: "1.0.0",
//         extra: {
//             // API_URL: process.env.API_URL,
//         },
//     },
// };

import 'dotenv/config';

export default {
  expo: {
    name: "MorningStar-Coop",
    slug: "MorningStar-Coop",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "morningstarcoop",
    userInterfaceStyle: "automatic",
    newArchEnabled: false,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
      output: "export"
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      API_URL: process.env.API_URL_DEV, // optional
    },
  },
};
