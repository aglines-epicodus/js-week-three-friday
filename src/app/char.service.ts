import { Injectable } from '@angular/core';
import { Char } from './char.model';
import { CHARS } from './mock-chars';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharService {
  chars: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase){
    this.chars = database.list('chars');
  }

  getChars() {
    return this.chars;
  }

  getCharById(charId: number){
    for (var i = 0; i <= CHARS.length -1; i++) {
      if (CHARS[i].id === charId) {
        return CHARS[i];
      }
    }
  }
}
