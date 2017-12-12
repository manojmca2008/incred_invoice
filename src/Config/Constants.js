import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDYne1azHMU9Sadezxslms1DE5fRKI1uV4",
    authDomain: "kalakar-6d8a7.firebaseapp.com",
    databaseURL: "//kalakar-6d8a7.firebaseio.com",
    projectId: "kalakar-6d8a7",
    storageBucket: "",
    messagingSenderId: "419273052662"
};

firebase.initializeApp(firebaseConfig)

export const firebaseDatabase = firebase.database().ref()
//export const firebaseAuth = firebase.auth
export const apiUrl = '//192.168.1.13/api/invoice/';
export const pubnubPublishKey = 'sub-c-a097327c-cb5f-11e7-9319-62175e58f2c1';
export const pubnubSubscribeKey = 'pub-c-251a11f2-06a3-4076-b79e-cd049d519101';
