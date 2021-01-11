/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: 'AIzaSyDXx4HCFmCKC-fAr2fpcNFFS_geOp1OUSY',
    authDomain: 'netflix-guido.firebaseapp.com',
    projectId: 'netflix-guido',
    storageBucket: 'netflix-guido.appspot.com',
    messagingSenderId: '891833978532',
    appId: '1:891833978532:web:3ddf5a4f506ac079b56031'
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase); // si habilito puedo duplicar la database 

export { firebase };
