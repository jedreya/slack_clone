import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyBuqAjLPubgmAs6iSBU1jX_MC_nn_X7IPw',
    authDomain: 'slack-clone-app-a9fb8.firebaseapp.com',
    databaseURL: 'https://slack-clone-app-a9fb8.firebaseio.com',
    projectId: 'slack-clone-app-a9fb8',
    storageBucket: 'slack-clone-app-a9fb8.appspot.com',
    messagingSenderId: '311154981496',
    appID: '1:311154981496:web:f3d25c6f471a2cb785cb8d',
    measurementID: 'G-B3V3TW1657'
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()
export {
  firebase,
  db
}
