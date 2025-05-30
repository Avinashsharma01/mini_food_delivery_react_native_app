# Mini Food Ordering App

![React Native](https://img.shields.io/badge/React%20Native-0.79-blue)
![Firebase](https://img.shields.io/badge/Firebase-9.x-orange)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A React Native application for food ordering with real-time Firebase integration.

<div align="center">
  <img src="https://i.imgur.com/placeholder-screenshot.png" alt="App Screenshot" width="200" />
  <img src="https://i.imgur.com/placeholder-screenshot-2.png" alt="App Screenshot" width="200" />
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
