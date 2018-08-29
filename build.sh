ionic cordova build android --prod
rm www/assets/apk/app.apk
mv platforms/android/app/build/outputs/apk/debug/app-debug.apk www/assets/app.apk