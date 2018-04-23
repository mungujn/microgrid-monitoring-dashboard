/**
 * Created by nickson on 4/23/2018.
 */
import firebase from 'firebase'

const config = {
    apiKey: "***REMOVED***",
    authDomain: "***REMOVED***",
    databaseURL: "***REMOVED***",
    projectId: "***REMOVED***",
    storageBucket: "",
    messagingSenderId: "***REMOVED***"
};
firebase.initializeApp(config);
const db = firebase.database();

export function login(email, password) {
    return new Promise(function (resolve, reject) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            resolve("Logged in as "+email)
        }, ()=>{
            reject("Failed to login as " + email)
        });
    });
}

export function logout() {
    return new Promise(function (resolve, reject) {
        firebase.auth().signOut().then(()=>{
            resolve("Signed out")
        },()=>{
            reject("Failed to sign out")
        })
    });
}

export function isLoggedIn() {
    return new Promise((resolve)=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                resolve({
                    user:user.displayName,email:user.email
                })
            } else {
                // No user is signed in.
                resolve(null)
            }
        });
    }, ()=>{});
}

function saveData(location, key, value){
    //location = main node
    let ref = db.ref(location);
    return ref.child(key).set(value).then((data)=>{
        console.log('common.js: Save result object follows below');
        return console.log(data);
    }).catch((error)=>{
        console.log('common.js: Save error object follows below');
        return console.log(error);
    });
}

function readData(location, key){
    "use strict";
    return db.ref(location).child(key).once('value').then((result)=>{
        //console.log('common.js: Read result object follows below');
        //console.log(result);
        return result.val();
    }).catch((error)=>{
        console.log('common.js: Save error object follows below');
        return console.log(error);
    });
}

function updateData(location, key, values){
    //location = main node
    let ref = db.ref(location);
    return ref.child(key).update(values).then((data)=>{
        console.log('common.js: Save result object follows below');
        return console.log(data);
    }).catch((error)=>{
        console.log('common.js: Save error object follows below');
        return console.log(error);
    });
}
