import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAMYbvD8G8QBef_7pjnzv3A1DlVGJ0VL3g',
  authDomain: 'tasked-386bf.firebaseapp.com',
  projectId: 'tasked-386bf',
  storageBucket: 'tasked-386bf.appspot.com',
  messagingSenderId: '784415934214',
  appId: '1:784415934214:web:a8fc25fba25e1b6d1ec087'
};

//initialize firebase

firebase.initializeApp(firebaseConfig);

//initialize individual services
const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

//timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
