import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pencil-intern-app';
  // items: Observable<any[]>;
  // constructor(firestore: AngularFirestore, public auth: AngularFireAuth) {
  //   this.items = firestore.collection('items').valueChanges();
  // }
}
