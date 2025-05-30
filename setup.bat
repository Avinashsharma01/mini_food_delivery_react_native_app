@echo off
REM Food Ordering App Setup and Run Script

echo ===================================================
echo      Mini Food Ordering App - Setup and Run
echo ===================================================
echo.

:menu
echo Choose an option:
echo 1. Install dependencies
echo 2. Start Metro server
echo 3. Run on Android
echo 4. Run on iOS (Mac only)
echo 5. Setup Firebase (instructions)
echo 6. Exit
echo.

set /p choice=Enter your choice (1-6): 

if "%choice%"=="1" goto install
if "%choice%"=="2" goto start
if "%choice%"=="3" goto android
if "%choice%"=="4" goto ios
if "%choice%"=="5" goto firebase
if "%choice%"=="6" goto end

echo Invalid choice. Please try again.
echo.
goto menu

:install
echo.
echo Installing dependencies...
call npm install
echo.
echo Dependencies installed successfully!
echo.
pause
goto menu

:start
echo.
echo Starting Metro server...
start cmd /k "npm start"
echo.
echo Metro server started in a new window.
echo.
pause
goto menu

:android
echo.
echo Running on Android...
call npm run android
echo.
pause
goto menu

:ios
echo.
echo Running on iOS...
echo Note: This will only work on macOS systems.
call npm run ios
echo.
pause
goto menu

:firebase
echo.
echo Firebase Setup Instructions
echo ==========================
echo.
echo 1. Create a Firebase project at https://console.firebase.google.com/
echo 2. Enable Firestore Database in the Firebase console
echo 3. Get your Firebase configuration from Project Settings
echo 4. Update the configuration in src/services/firebase.ts
echo 5. Run the app and it will initialize with mock data
echo.
echo For detailed instructions, check:
echo src/services/FirebaseSetupGuide.ts
echo.
pause
goto menu

:end
echo.
echo Thank you for using the Food Ordering App!
echo.
