import * as firebase from "firebase";
import "firebase/database";

let config = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyChUkL0e_gt6MlodZf3GAQHpoHp1fPEPb4",
    authDomain: "crud-ea647.firebaseapp.com",
    databaseURL: "https://crud-ea647.firebaseio.com",
    projectId: "crud-ea647",
    storageBucket: "crud-ea647.appspot.com",
    messagingSenderId: "181470742587",
    appId: "1:181470742587:web:cae9f8b66285341ceff41e",
    measurementId: "G-GMHPF1N2BS",
};

firebase.initializeApp(config);

export default firebase.database();