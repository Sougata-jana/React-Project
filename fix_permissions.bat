@echo off
del /f /s /q "c:/Users/souga/Desktop/ReactProject/Currency/node_modules/.vite/deps\*.*"
rd /q "c:/Users/souga/Desktop/ReactProject/Currency/node_modules/.vite/deps"
npm cache clean --force
cd Currency
npm install
npm run dev
