# Upload Get 2 Gather Files to GitHub
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  Get 2 Gather - Uploading latest updates to GitHub" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

Set-Location -Path $PSScriptRoot

Write-Host "`n[1/4] Configuring user info..." -ForegroundColor Yellow
git config user.name "sukhman123456"
git config user.email "sukhmanmalhi1122@gmail.com"

Write-Host "[2/4] Setting remote repository..." -ForegroundColor Yellow
git remote set-url origin https://github.com/sukhman123456/get2gether.git 2>$null
if ($LASTEXITCODE -ne 0) {
    git remote add origin https://github.com/sukhman123456/get2gether.git 2>$null
}

Write-Host "[3/4] Staging all updated files..." -ForegroundColor Yellow
git add -A

Write-Host "[4/4] Committing and pushing to GitHub..." -ForegroundColor Yellow
git commit -m "Update Paneer Tikka image and mobile responsiveness fixes for Location section"
git push -u origin main

Write-Host "`n========================================================" -ForegroundColor Green
Write-Host "  SUCCESS! All files uploaded to:" -ForegroundColor Green
Write-Host "  https://github.com/sukhman123456/get2gether" -ForegroundColor Green
Write-Host "========================================================`n" -ForegroundColor Green

