# PowerShell script to start Next.js development server with network access
Write-Host "🚀 Starting RAMIXIT PRIVATE LIMITED Website Development Server..." -ForegroundColor Cyan

# Get local IP addresses
$ipAddresses = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -like "192.168.*" } | Select-Object -ExpandProperty IPAddress

Write-Host "`n📡 Your local IP addresses:" -ForegroundColor Yellow
foreach ($ip in $ipAddresses) {
    Write-Host "   • http://$ip`:3000" -ForegroundColor Green
}

Write-Host "`n📱 To access from your phone/tablet:" -ForegroundColor Cyan
Write-Host "   1. Make sure your device is on the same WiFi network" -ForegroundColor White
Write-Host "   2. Open a browser and try these URLs:" -ForegroundColor White
foreach ($ip in $ipAddresses) {
    Write-Host "      → http://$ip`:3000" -ForegroundColor Green
}

Write-Host "`n⚠️  If you can't access from other devices:" -ForegroundColor Yellow
Write-Host "   • Run 'setup-firewall.ps1' as Administrator first" -ForegroundColor White
Write-Host "   • Check that both devices are on the same WiFi network" -ForegroundColor White

Write-Host "`n🔥 Starting server... (Keep this window open)" -ForegroundColor Magenta
Write-Host "   Press Ctrl+C to stop the server" -ForegroundColor Gray

# Start the development server
npm run dev -- --hostname 0.0.0.0 --port 3000