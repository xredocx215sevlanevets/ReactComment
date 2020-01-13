import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC7uBqMC7RaTWevKjbYtcI4AESxRVovGps",
    authDomain: "commentsreact-9822c.firebaseapp.com",
    databaseURL: "https://commentsreact-9822c.firebaseio.com",
    projectId: "commentsreact-9822c",
    storageBucket: "commentsreact-9822c.appspot.com",
    messagingSenderId: "455094450332",
    appId: "1:455094450332:web:d8b26e0d767ed824311559"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// criando uma conexao nova com o banco de dados do firebase
export const database = firebase.database();