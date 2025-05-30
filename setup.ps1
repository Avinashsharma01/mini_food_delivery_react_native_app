# Food Ordering App Setup and Run Script

function Show-Menu {
    Clear-Host
    Write-Host "==================================================="
    Write-Host "      Mini Food Ordering App - Setup and Run" -ForegroundColor Cyan
    Write-Host "==================================================="
    Write-Host
    Write-Host "Choose an option:"
    Write-Host "1. Install dependencies"
    Write-Host "2. Start Metro server"
    Write-Host "3. Run on Android"
    Write-Host "4. Run on iOS (Mac only)"
    Write-Host "5. Setup Firebase (instructions)"
    Write-Host "6. Exit"
    Write-Host
}

function Install-Dependencies {
    Write-Host
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host
    Write-Host "Dependencies installed successfully!" -ForegroundColor Green
    Write-Host
    Pause
}

function Start-Metro {
    Write-Host
    Write-Host "Starting Metro server..." -ForegroundColor Yellow
    Start-Process powershell -ArgumentList "-Command npm start"
    Write-Host
    Write-Host "Metro server started in a new window." -ForegroundColor Green
    Write-Host
    Pause
}

function Run-Android {
    Write-Host
    Write-Host "Running on Android..." -ForegroundColor Yellow
    npm run android
    Write-Host
    Pause
}

function Run-iOS {
    Write-Host
    Write-Host "Running on iOS..." -ForegroundColor Yellow
    Write-Host "Note: This will only work on macOS systems." -ForegroundColor Red
    npm run ios
    Write-Host
    Pause
}

function Show-FirebaseInstructions {
    Write-Host
    Write-Host "Firebase Setup Instructions" -ForegroundColor Cyan
    Write-Host "==========================" -ForegroundColor Cyan
    Write-Host
    Write-Host "1. Create a Firebase project at https://console.firebase.google.com/"
    Write-Host "2. Enable Firestore Database in the Firebase console"
    Write-Host "3. Get your Firebase configuration from Project Settings"
    Write-Host "4. Update the configuration in src/services/firebase.ts"
    Write-Host "5. Run the app and it will initialize with mock data"
    Write-Host
    Write-Host "For detailed instructions, check:" -ForegroundColor Yellow
    Write-Host "src/services/FirebaseSetupGuide.ts" -ForegroundColor Yellow
    Write-Host
    Pause
}

do {
    Show-Menu
    $choice = Read-Host -Prompt "Enter your choice (1-6)"
    
    switch ($choice) {
        "1" { Install-Dependencies }
        "2" { Start-Metro }
        "3" { Run-Android }
        "4" { Run-iOS }
        "5" { Show-FirebaseInstructions }
        "6" { break }
        default { 
            Write-Host "Invalid choice. Please try again." -ForegroundColor Red
            Write-Host
            Pause
        }
    }
} while ($choice -ne "6")

Write-Host
Write-Host "Thank you for using the Food Ordering App!" -ForegroundColor Cyan
Write-Host
