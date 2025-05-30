# Mini Food Ordering App

![React Native](https://img.shields.io/badge/React%20Native-0.79-blue)
![Firebase](https://img.shields.io/badge/Firebase-9.x-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A React Native application for food ordering with real-time Firebase integration.

<div align="center">
  <img src="./src/assets/ScreenShots of Application/Food Menu.png" alt="App Screenshot" width="200" />
  <img src="./src/assets/ScreenShots of Application/Order Summary.png" alt="App Screenshot" width="200" />
  <img src="./src/assets/ScreenShots of Application/Cart.png" alt="App Screenshot" width="200" />
</div>

## 🚀 Features

- **Browse Food Items**: View food items organized by categories
- **Interactive Menu**: Add items to cart with quantity selection
- **Shopping Cart**: Review items, adjust quantities, and view total price
- **Order Summary**: Confirm order details before placing order
- **Firebase Integration**: Real-time data storage and retrieval
- **Error Handling**: Proper loading states and error messages
- **Clean UI**: Responsive and modern user interface

## 📱 Screens

1. **Splash Screen**: Initial loading screen with app branding
2. **Menu Screen**: Browse all food items by category
3. **Cart Screen**: Review and modify selected items
4. **Order Summary Screen**: Final order review and confirmation

## 🔧 Technical Features

- TypeScript for type safety
- Context API for state management
- Firebase Firestore for database
- React Navigation for screen transitions
- Custom reusable components

## 🛠️ Getting Started

### Prerequisites

- Node.js (>= 18.0.0)
- npm or yarn
- React Native development environment
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/Mini_Food_Ordering_App.git
cd Mini_Food_Ordering_App
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Setup Firebase:

   - Create a Firebase project
   - Enable Firestore Database
   - Update `src/services/firebase.ts` with your Firebase config

4. Run the application:

```bash
# Start Metro
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

### Quick Start Scripts

We've included convenience scripts to help you get started quickly:

- Windows: Run `setup.bat`
- PowerShell: Run `setup.ps1`

These scripts provide menu options for installation, running, and Firebase setup.

## 📂 Project Structure

```
/src
  /assets       # Images and other assets
  /components   # Reusable UI components
  /context      # React Context providers
  /navigation   # Navigation configuration
  /screens      # Main app screens
  /services     # Firebase and API services
```

## 📋 Development Notes

- The app uses a simple cart context for state management
- Firebase provides real-time data synchronization
- The UI is designed to be responsive on various device sizes
- Error states and loading indicators are implemented for better UX

## 🔥 Firebase Setup

For detailed Firebase setup instructions, see [src/services/FirebaseSetupGuide.ts](src/services/FirebaseSetupGuide.ts).

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons from [Flaticon](https://www.flaticon.com/)
- Food images from [Unsplash](https://unsplash.com/)

# Mini Food Ordering App

A React Native application for food ordering with Firebase integration.

## Features

- Browse food items by category
- Add items to cart with quantity selection
- Review cart and adjust quantities
- Place orders with order summary
- Real-time data fetching from Firebase

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Setup Firebase

Before running the app, you need to set up Firebase:

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Firestore Database in the Firebase console
3. Get your Firebase configuration (apiKey, authDomain, projectId, etc.)
4. Update the configuration in `src/services/firebase.ts`
5. Set up Firestore security rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
