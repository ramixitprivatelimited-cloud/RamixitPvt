# PowerShell script to add firewall rule for Next.js dev server
Write-Host "Adding Windows Firewall rule for Next.js development server..." -ForegroundColor Green

try {
    # Add inbound rule for port 3000
    New-NetFirewallRule -DisplayName "Next.js Dev Server" -Direction Inbound -Protocol TCP -LocalPort 3000 -Action Allow -Enabled True
    Write-Host "✅ Firewall rule added successfully!" -ForegroundColor Green
    
    # Also add outbound rule (optional but helpful)
    New-NetFirewallRule -DisplayName "Next.js Dev Server Outbound" -Direction Outbound -Protocol TCP -LocalPort 3000 -Action Allow -Enabled True
    Write-Host "✅ Outbound firewall rule added successfully!" -ForegroundColor Green
    
    Write-Host "`n🎉 Firewall configuration complete!" -ForegroundColor Cyan
    Write-Host "You can now access the website from other devices on your network." -ForegroundColor Yellow
}
catch {
    Write-Host "❌ Error adding firewall rule: $_" -ForegroundColor Red
    Write-Host "Make sure you're running PowerShell as Administrator" -ForegroundColor Yellow
}

Write-Host "`nPress any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")