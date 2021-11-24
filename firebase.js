import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC6UYsHRn_GI1Ky3nW06z4MyxhWeZ48SO0',
  authDomain: 'signal-clone-5c37d.firebaseapp.com',
  projectId: 'signal-clone-5c37d',
  storageBucket: 'signal-clone-5c37d.appspot.com',
  messagingSenderId: '777167343532',
  appId: '1:777167343532:web:b68849221592ea64d3b409',
};

let app;

if (app == null) {
  app = initializeApp(firebaseConfig);
} else {
  app = app();
}

const db = getFirestore();
const auth = getAuth();

export { db, auth };
