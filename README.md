# MemoryGame

Installation steps:

After cloning the repo:
1. insttall node modules : npm install or yarn install

Running the app:
1. npx react-native run-android

To build debug apk:
1. npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
2. cd android
3. gradlew assembleDebug

# About App

app name: Memory game

App overview: 
A,B to H alphabets are shuffeled and finally 4*4=16  shuffeled cards will be displayed,
Counting ot number of attempts and number of mateshed will be displayed
Reset button to reshuffel the cards.

![launch screen](/assets/Screenshot_1634590637.png?raw=true "starting screen")
![on click](/assets/Screenshot_1634590648.png?raw=true "starting screen")
![on matching](/assets/Screenshot_1634590671.png?raw=true "matching screen")
![on matching](/assets/Screenshot_1634590688.png?raw=true "matching screen")
