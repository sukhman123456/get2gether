@echo off
title Upload Get 2 Gather Files to GitHub
echo ========================================================
echo   Get 2 Gather - Uploading latest updates to GitHub
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Configuring user info...
git config user.name "sukhman123456"
git config user.email "sukhmanmalhi1122@gmail.com"

echo [2/4] Setting remote repository...
git remote set-url origin https://github.com/sukhman123456/get2gether.git 2>nul || git remote add origin https://github.com/sukhman123456/get2gether.git

echo [3/4] Staging all files...
git add -A

echo [4/4] Committing and pushing to GitHub...
git commit -m "Elevate Hero section copy and typography with authentic culinary storytelling"
git push -u origin main

echo.
echo ========================================================
echo   SUCCESS! All files uploaded to:
echo   https://github.com/sukhman123456/get2gether
echo ========================================================
echo.
pause
