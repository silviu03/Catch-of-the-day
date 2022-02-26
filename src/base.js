import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXLyngShhxQjMtWqXpVRteb-BkKUROaS4",
    authDomain: "catch-of-the-day-silviu03.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-silviu03-default-rtdb.firebaseio.com",
    
});

const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };

export default base;