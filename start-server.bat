@echo off
echo.
echo ======================================================
echo    RAMIXIT PRIVATE LIMITED Website - Development Server
echo ======================================================
echo.
echo 🚀 Starting development server...
echo.
echo 📱 To access from your phone/tablet:
echo    1. Make sure your phone is on the same WiFi network
echo    2. Try these URLs in your phone's browser:
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /i "IPv4"') do (
    for /f "tokens=1" %%b in ("%%a") do (
        if not "%%b"=="127.0.0.1" (
            echo       → http://%%b:3000
        )
    )
)
echo.
echo ⚠️  If you can't access from phone:
echo    • Run 'setup-firewall.ps1' as Administrator first
echo    • Or temporarily disable Windows Firewall
echo.
echo 🔥 Keep this window open while using the website
echo    Press Ctrl+C to stop the server
echo.
npm run dev -- --hostname 0.0.0.0 --port 3000