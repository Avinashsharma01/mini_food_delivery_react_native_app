# Platform-Specific Configuration Guide

## Android Configuration

### 1. Update Android Manifest

- Navigate to `android/app/src/main/AndroidManifest.xml`
- Ensure you have internet permissions:
  ```xml
  <uses-permission android:name="android.permission.INTERNET" />
  ```
- For Firebase, make sure your application tag includes:
  ```xml
  <application
    ...
    android:name=".MainApplication"
    android:usesCleartextTraffic="true">
    <!-- ... other configuration ... -->
  </application>
  ```

### 2. Enable MultiDex

- Update `android/app/build.gradle`:

  ```gradle
  defaultConfig {
      // ...
      multiDexEnabled true
  }

  dependencies {
      // ...
      implementation "androidx.multidex:multidex:2.0.1"
  }
  ```

### 3. Firebase Setup for Android

- Download `google-services.json` from Firebase Console
- Place it in `android/app/`
- Update `android/build.gradle`:
  ```gradle
  buildscript {
      dependencies {
          // ...
          classpath 'com.google.gms:google-services:4.3.15'
      }
  }
  ```
- Update `android/app/build.gradle`:
  ```gradle
  apply plugin: 'com.android.application'
  apply plugin: 'com.google.gms.google-services'
  ```

## iOS Configuration

### 1. Update Info.plist

- Navigate to `ios/Mini_Food_Ordering_App/Info.plist`
- Add permissions for network access:
  ```xml
  <key>NSAppTransportSecurity</key>
  <dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
  </dict>
  ```

### 2. Firebase Setup for iOS

- Download `GoogleService-Info.plist` from Firebase Console
- Add it to your Xcode project (drag and drop into the project navigator)
- Make sure to add it to the target

### 3. Cocoapods Setup

- Make sure your `ios/Podfile` includes Firebase pods:
  ```ruby
  target 'Mini_Food_Ordering_App' do
    # ...
    pod 'Firebase/Core'
    pod 'Firebase/Firestore'
  end
  ```
- Run `cd ios && pod install` to install dependencies

## Common Issues & Troubleshooting

### Network Issues

- Make sure you have proper internet permissions
- For iOS, ensure your `Info.plist` allows arbitrary loads
- Check your Firebase configuration matches your project

### Firebase Connection Issues

- Verify your `firebase.ts` configuration
- Make sure you've added the correct platform-specific files
- Check Firebase console for any service disruptions

### Build Errors

- Android: Run `cd android && ./gradlew clean` to clean your project
- iOS: Run `cd ios && pod install` to ensure dependencies are up to date

### React Native Version Compatibility

- Ensure Firebase packages are compatible with your React Native version
- Check for any required native linking or configuration

## Performance Optimization

### Android

- Consider enabling Hermes JavaScript engine in `android/app/build.gradle`:
  ```gradle
  project.ext.react = [
      enableHermes: true
  ]
  ```

### iOS

- Enable Flipper for easier debugging in `ios/Podfile`:
  ```ruby
  use_flipper!()
  ```

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Firebase Documentation](https://firebase.google.com/docs)
- [React Native Firebase](https://rnfirebase.io/)
