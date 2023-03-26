import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);
    this.auth = getAuth();
  };

  async register(name, email, password) {
    const newUser = await createUserWithEmailAndPassword( this.auth, email, password);

    return await updateProfile( newUser.user, {
      displayName: name
    });
  };

  async logIn(email,password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  };

  async logOut() {
    await signOut(this.auth);
  };
};

const firebase = new Firebase();
export default firebase;