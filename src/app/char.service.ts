import { Injectable } from '@angular/core';
import { Char } from './char.model';
// import { CHARS } from './mock-chars';
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

  addChar(newChar: Char) {
    this.chars.push(newChar);
  }

  getCharById(charId: string){
    return this.database.object('chars/' + charId);
  }

  updateChar(localUpdatedChar) {
    var charEntryInFirebase = this.getCharById(localUpdatedChar.$key);
    charEntryInFirebase.update({charname: localUpdatedChar.charname,
                                desc: localUpdatedChar.desc,
                                evil: localUpdatedChar.evil});
  }

  deleteChar(localCharToDelete){
    var charEntryInFirebase = this.getCharById(localCharToDelete.$key);
    charEntryInFirebase.remove();
  }
}
