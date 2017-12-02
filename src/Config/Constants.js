import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDYne1azHMU9Sadezxslms1DE5fRKI1uV4",
    authDomain: "kalakar-6d8a7.firebaseapp.com",
    databaseURL: "https://kalakar-6d8a7.firebaseio.com",
    projectId: "kalakar-6d8a7",
    storageBucket: "",
    messagingSenderId: "419273052662"
};

firebase.initializeApp(firebaseConfig)

export const firebaseDatabase = firebase.database().ref()
//export const firebaseAuth = firebase.auth
export const apiUrl = 'http://api.kalakar.com/api/invoice/';
