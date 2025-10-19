@echo off
echo Adding Windows Firewall rule for Node.js server on port 3000...
netsh advfirewall firewall add rule name="Next.js Dev Server" dir=in action=allow protocol=TCP localport=3000
echo.
echo Firewall rule added successfully!
echo You can now access the server from other devices on your network.
echo.
pause