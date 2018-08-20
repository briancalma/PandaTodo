ionic cordova run android --prod
rm www/assets/apk/app-debug.apk
mv platforms/android/app/build/outputs/apk/debug/app-debug.apk www/assets/apk
