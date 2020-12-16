import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyB4RivcTIf0NVcuLG0h4oPgaKwn4FFNKCM",
        authDomain: "e-commerce-a84af.firebaseapp.com",
        projectId: "e-commerce-a84af",
        storageBucket: "e-commerce-a84af.appspot.com",
        messagingSenderId: "530423336511",
        appId: "1:530423336511:web:88cc47c4bd46f5fa13328a"
    }
)

export const getFirebase = () => {
    return app;
}

//Para llamar a la base de datos
export const getFirestore = () => {
    return firebase.firestore();
}