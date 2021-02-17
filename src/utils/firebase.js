import * as firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCQulTyvOMnRNihnZ58d_xiu8VF-HfGICo",
    authDomain: "public-restaurant-map.firebaseapp.com",
    projectId: "public-restaurant-map",
    storageBucket: "public-restaurant-map.appspot.com",
    messagingSenderId: "865524918860",
    appId: "1:865524918860:web:826332e838e25fa9c962e9",
    measurementId: "G-CRSRB22N35"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;