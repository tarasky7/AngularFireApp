import { Injectable } from "@angular/core";
// import 'rxjs/operators/toPromise';
import { AngularFireAuth } from '@angular/fire/auth';
import { firebase } from '@firebase/app';
import { auth } from 'firebase'
@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth){}

  doGoogleLogin(){
    console.log("rsss");
    return new Promise<any>((resolve, reject) => {
      const provider = new auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth
      .signInWithPopup(provider)
      .then(res => {
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      })
    })
  }

  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
    })
  }

  doLogout(){
    return new Promise((resolve, reject) => {
      if(auth().currentUser){
        this.afAuth.signOut();
        resolve();
      }
      else{
        reject();
      }
    });
  }

}
