import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaJZ6Q4aWJkY4JZImuIBXGqdCOL_npXOo",
    authDomain: "primaria-psuv-2021.firebaseapp.com",
    databaseURL: "primaria-psuv-2021.firebaseapp.com",
    projectId: "primaria-psuv-2021",
    storageBucket: "primaria-psuv-2021.appspot.com",
    messagingSenderId: "860645039036",
    appId: "1:860645039036:web:1890539d8d3770fc38e9b9",
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD5-4gUUrMLCzTWDEJ3QpkmfIboN5PDCq4",
//     authDomain: "push-one-signal-17ede.firebaseapp.com",
//     databaseURL: "https://push-one-signal-17ede.firebaseio.com",
//     projectId: "push-one-signal-17ede",
//     storageBucket: "push-one-signal-17ede.appspot.com",
//     messagingSenderId: "803724161810",
//     appId: "1:803724161810:web:02f32ebc98a71e376339cb"
//   };


// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }
    
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}
