import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "netflix-845d0.firebaseapp.com",
  projectId: "netflix-845d0",
  storageBucket: "netflix-845d0.appspot.com",
  messagingSenderId: "146772227915",
  appId: "1:146772227915:web:1c0e9882de7b4c6bafdace",
  measurementId: "G-MW1E47FBQ2"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
